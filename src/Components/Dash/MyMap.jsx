import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import Axios from "axios";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MyMap({ data }) {
  const [hosp, setHos] = useState(true);
  const [school, setSchool] = useState(true);
  const [hospitalMarker, setHospital] = useState([]);
  const [schMarker, setScMarker] = useState([]);
  const city = data.city;
  const suburbName = data.suburbName;
  let obj = {};
  let legend;
  let hosMarkers = [];
  let schoolMarkers = [];
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
        obj = response;
      })
      .then(function() {
        loadMap();
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      // lat: parseFloat(obj.data.results[0].geometry.location.lat),
      // lng: parseFloat(obj.data.results[0].geometry.location.lng)
      center: {
        lat: parseFloat(obj.data[0].lat),
        lng: parseFloat(obj.data[0].lon)
      },
      zoom: 13
    });

    // add hospital marker
    if (hosp) {
      parseHostpitalCoords().map(data => {
        addHosMarker(data.coord, map, corss, data.name, data.beds, data.url);
      });
      setHospital(hosMarkers);
    }
    if (school) {
      //add preschool marker
      paresePreCoords().map(data => {
        addSchoolMarker(data.coord, map, preSchool, data.name, data.url);
      });

      paresePrimaryCoords().map(data => {
        addSchoolMarker(data.coord, map, primary, data.name, data.url);
      });

      //add secondary school marker
      pareseSecondaryCoords().map(data => {
        addSchoolMarker(data.coord, map, secondary, data.name, data.url);
      });
      setScMarker(schoolMarkers);
    }

    setHosOnAll(map);
    setSchoolOnAll(map);

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

    var icons = {
      PreSchool: {
        name: "Pre-School",
        icon: preSchool
      },
      Primary: {
        name: "Primary School",
        icon: primary
      },
      Secondary: {
        name: "Secondary School",
        icon: secondary
      }
    };
    if (data.schools.length !== 0 && school) {
      legend = document.getElementById("legend");
      for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement("div");
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        if (div !== null) {
          legend.appendChild(div);
        }
      }

      map.controls[window.google.maps.ControlPosition.RIGHT_TOP].push(legend);
    }

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
  function addHosMarker(coords, map, icon, name, beds, url) {
    let infoWindow;
    let hosMarker = new window.google.maps.Marker({
      position: coords,
      map: map,
      icon: icon,
      animation: window.google.maps.Animation.DROP
    });

    infoWindow = new window.google.maps.InfoWindow({
      content: `<a href=${url} target=blank>${name} has approx ${beds} hospital beds</a>`
    });
    infoWindow.setZIndex(100);
    hosMarker.addListener("click", function() {
      infoWindow.open(map, hosMarker);
    });
    hosMarker.addListener("mouseover", function() {
      this.setAnimation(window.google.maps.Animation.BOUNCE);
    });

    hosMarker.addListener("mouseover", function() {
      this.setAnimation(null);
    });
    hosMarkers.push(hosMarker);
  }

  function addSchoolMarker(coords, map, icon, name, url) {
    let infoWindow;
    let schoolMarker = new window.google.maps.Marker({
      position: coords,
      map: map,
      icon: icon,
      animation: window.google.maps.Animation.DROP
    });
    infoWindow = new window.google.maps.InfoWindow({
      content: `<a href=${url} target=blank>${name}</a>`
    });
    schoolMarker.addListener("click", function() {
      infoWindow.open(map, schoolMarker);
    });
    schoolMarker.addListener("mouseover", function() {
      this.setAnimation(window.google.maps.Animation.BOUNCE);
    });

    schoolMarker.addListener("mouseover", function() {
      this.setAnimation(null);
    });
    schoolMarkers.push(schoolMarker);
  }

  function setHosOnAll(map) {
    for (var i = 0; i < hospitalMarker.length; i++) {
      hosMarkers[i].setMap(map);
    }
  }

  function setSchoolOnAll(map) {
    for (var i = 0; i < schoolMarkers.length; i++) {
      schoolMarkers[i].setMap(map);
    }
  }

  function handleHos() {
    setHos(!hosp);
  }

  function handleSchool() {
    setSchool(!school);
  }

  useEffect(() => {
    for (var item in schMarker) {
      if (school) {
        schMarker[item].setVisible(true);
      } else {
        schMarker[item].setVisible(false);
      }
    }
  }, [school]);

  useEffect(() => {
    for (var item in hospitalMarker) {
      if (hosp) {
        hospitalMarker[item].setVisible(true);
      } else {
        hospitalMarker[item].setVisible(false);
      }
    }
  }, [hosp]);

  return (
    <React.Fragment>
      {data.hosptials.length !== 0 || data.schools.length !== 0 ? (
        <span>Show:</span>
      ) : null}
      {data.hosptials.length === 0 ? null : (
        <React.Fragment>
          <Checkbox value="Hospital" checked={hosp} onClick={handleHos} />
          <span>Hospital</span>
        </React.Fragment>
      )}
      {data.schools.length === 0 ? null : (
        <React.Fragment>
          <Checkbox checked={school} onClick={handleSchool} />
          <span>Schools</span>
        </React.Fragment>
      )}

      <div style={{ height: "85vh", width: "100%", fontSize: "10px" }}>
        <div className="map" id="map" />
        <div id="legend" style={{ backgroundColor: "white", opacity: "0.8" }}>
          <p>Icon Legend</p>
        </div>
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
