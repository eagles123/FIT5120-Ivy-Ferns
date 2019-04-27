import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import Axios from "axios";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MyMap({ data }) {
  const [hosp, setHos] = useState(true);
  const [school, setSchool] = useState(true);
  const city = data.city;
  const suburbName = data.suburbName;
  let obj = {};
  const corss = require("../../assets/cross.png");
  const primary = require("../../assets/primary.png");
  const preSchool = require("../../assets/pre.png");
  const secondary = require("../../assets/secondary.png");

  // let geo = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       properties: {
  //         letter: "G",
  //         color: "blue",
  //         rank: "7",
  //         ascii: "71"
  //       },
  //       geometry: {
  //         type: "Polygon",
  //         coordinates: [[]]
  //       }
  //     }
  //   ]
  // };

  //{ lat: -37.5702758, lng: 143.8370906 },
  //methods to parse prop data into required formate
  function parseHostpitalCoords() {
    let tempCor = [];
    data.hosptials.map(item =>
      tempCor.push({
        name: item.hospital_name,
        beds: item.beds,
        coord: {
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude)
        },
        url: item.url
      })
    );
    return tempCor;
  }

  function paresePreCoords() {
    let per = [];
    data.schools.map(item => {
      if (item.school_type === "Preschool")
        return per.push({
          name: item.school_name,
          coord: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          },
          url: item.url
        });
    });
    return per;
  }
  function pareseSecondaryCoords() {
    let pri = [];
    data.schools.map(item => {
      if (item.school_type === "Secondary")
        // console.log(item.school_name);
        return pri.push({
          name: item.school_name,
          coord: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          },
          url: item.url
        });
    });
    return pri;
  }

  function paresePrimaryCoords() {
    let pri = [];
    data.schools.map(item => {
      if (item.school_type === "Primary")
        // console.log(item.school_name);
        return pri.push({
          name: item.school_name,
          coord: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          },
          url: item.url
        });
    });
    console.log(pri);
    return pri;
  }

  useEffect(() => {
    //fetch data suburb corninate
    // Axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    //   params: {
    //     address: `${suburbName} ${city} VIC`,
    //
    //   }
    // })
    //call from openstreetmap api
    Axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: `${suburbName} ${city} VIC`,
        format: "json",
        addressdetails: 1,
        limit: 1,
        polygon_geojson: 1
      }
    })
      .then(function(response) {
        console.log(response);
        obj = response;
      })
      .then(function() {
        loadMap();
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [hosp, school]);

  const initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      // lat: parseFloat(obj.data.results[0].geometry.location.lat),
      // lng: parseFloat(obj.data.results[0].geometry.location.lng)
      center: {
        lat: parseFloat(obj.data[0].lat),
        lng: parseFloat(obj.data[0].lon)
      },
      zoom: 12
    });

    // add hospital marker
    if (hosp)
      parseHostpitalCoords().map(data => {
        addMarker(data.coord, map, corss, data.name, data.beds, data.url);
      });
    if (school) {
      //add preschool marker
      paresePreCoords().map(data => {
        addMarker(data.coord, map, preSchool, data.name, null, data.url);
      });

      paresePrimaryCoords().map(data => {
        addMarker(data.coord, map, primary, data.name, null, data.url);
      });

      //add secondary school marker
      pareseSecondaryCoords().map(data => {
        addMarker(data.coord, map, secondary, data.name, null, data.url);
      });
    }

    //polygon boundary
    let geo = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            letter: "G",
            color: "blue",
            rank: "7",
            ascii: "71"
          },
          geometry: {
            type: "Polygon",
            coordinates: obj.data[0].geojson.coordinates
          }
        }
      ]
    };
    if (
      Array.isArray(geo.features[0].geometry.coordinates[0]) &&
      Array.isArray(geo.features[0].geometry.coordinates[0][0])
    ) {
      map.data.addGeoJson(geo);
      map.data.setStyle({
        fillColor: "#ef5350",
        strokeWeight: 1
      });
    }

    // setMapOnAll(map);

    //circle radius
    // let cityCircle = new window.google.maps.Circle({
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    //   map: map,
    //   center: {
    //     lat: parseFloat(obj.data[0].lat),
    //     lng: parseFloat(obj.data[0].lon)
    //   },
    //   radius: 3000
    // });
  };

  function loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }

  function loadMap() {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_MAPkEY
      }&callback=initMap`
    );
    window.initMap = initMap;
  }

  //function to add marker
  function addMarker(coords, map, icon, name, beds, url) {
    let marker = new window.google.maps.Marker({
      position: coords,
      map: map,
      icon: icon,
      animation: window.google.maps.Animation.DROP
    });

    if (beds) {
      let infoWindow = new window.google.maps.InfoWindow({
        content: `<a href=${url} target=blank>${name} has approx ${beds} hospital beds</a>`
      });
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    } else if (name) {
      let infoWindow = new window.google.maps.InfoWindow({
        content: `<a href=${url} target=blank>${name}</a>`
      });
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
    // return markers.push[marker];
  }
  // console.log(polygon.features[0].geometry.coordinates);

  return (
    <React.Fragment>
      <Checkbox value="Hospital" checked={hosp} onClick={() => setHos(!hosp)} />
      <span>Hospital</span>
      <Checkbox checked={school} onClick={() => setSchool(!school)} />{" "}
      <span>Schools</span>
      <div style={{ height: "85vh", width: "100%", fontSize: "10px" }}>
        <div className="map" id="map" />
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/icongeek26"
            title="Icongeek26"
          >
            Icongeek26
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
