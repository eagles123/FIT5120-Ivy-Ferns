import React, { useState, useEffect } from "react";
import Axios from "axios";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MyMap({ data }) {
  const city = data.city;
  const suburbName = data.suburbName;
  let obj = {};
  const corss = require("../../assets/cross.png");
  const school = require("../../assets/school.png");
  const preSchool = require("../../assets/teddy.png");

  // console.log(data);
  // console.log(data.hosptials);

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
        }
      })
    );
    return tempCor;
  }

  function paresePreCoords() {
    let per = [];
    data.schools.map(item => {
      if (item.school_type === "Preschool")
        per.push({
          name: item.school_name,
          coord: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          }
        });
    });
    return per;
  }

  function paresePrimaryCoords() {
    let pri = [];
    data.schools.map(item => {
      if (item.school_type === "Primary")
        pri.push({
          name: item.school_name,
          coord: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          }
        });
    });
    return pri;
  }

  function pareseSecondaryCoords() {
    let sec = [];
    data.schools.map(item => {
      if (item.school_type === "Primary")
        sec.push({
          name: item.school_name,
          coord: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          }
        });
    });
    return sec;
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
    parseHostpitalCoords().map(data => {
      addMarker(data.coord, map, corss, data.name, data.beds);
    });

    //add preschool marker
    paresePreCoords().map(data => {
      addMarker(data.coord, map, preSchool, data.name);
    });

    paresePrimaryCoords().map(data => {
      addMarker(data.coord, map, school, data.name);
    });

    //add secondary school marker
    pareseSecondaryCoords().map(data => {
      addMarker(data.coordcoord, map, school, data.name);
    });

    //polygon boundary
    // map.data.addGeoJson(geo);
    // map.data.setStyle({
    //   fillColor: "pink",
    //   strokeWeight: 1
    // });

    //circle radius
    let cityCircle = new window.google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
      center: {
        lat: parseFloat(obj.data[0].lat),
        lng: parseFloat(obj.data[0].lon)
      },
      radius: 3000
    });
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
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKNw45VT92V-NWTQokK03QedFFJxVYono&callback=initMap"
    );
    window.initMap = initMap;
  }

  //function to add marker
  function addMarker(coords, map, icon, name, beds) {
    let marker = new window.google.maps.Marker({
      position: coords,
      map: map,
      icon: icon
    });
    if (beds) {
      let infoWindow = new window.google.maps.InfoWindow({
        content: name + " with " + beds + " of beds "
      });
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    } else if (name) {
      let infoWindow = new window.google.maps.InfoWindow({
        content: name
      });
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "85vh", width: "100%", fontSize: "10px" }}>
      <div id="map" />
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
    </div>
  );
}
