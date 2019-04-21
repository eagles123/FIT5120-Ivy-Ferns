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
      if (item.school_type === "Pre")
        per.push({
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude)
        });
    });
    return per;
  }

  function paresePrimaryCoords() {
    let pri = [];
    data.schools.map(item => {
      if (item.school_type === "Primary")
        pri.push({
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude)
        });
    });
    return pri;
  }

  function pareseSecondaryCoords() {
    let sec = [];
    data.schools.map(item => {
      if (item.school_type === "Primary")
        sec.push({
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude)
        });
    });
    return sec;
  }

  //initialize school hospitals cordinates
  // useEffect(() => {
  //   setHospital(parseHostpitalCoords());
  //   setPre(paresePreCoords());
  //   setPrimary(paresePrimaryCoords());
  //   setSec(pareseSecondaryCoords());
  // }, []);
  // setHospital(parseHostpitalCoords());
  // setPre(paresePreCoords());
  // setPrimary(paresePrimaryCoords());
  // setSec(pareseSecondaryCoords());
  // useEffect(() => {
  //   setHospital(parseHostpitalCoords());
  //   console.log(parseHostpitalCoords());
  // }, []);
  useEffect(() => {
    //fetch data suburb corninate
    Axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: `${suburbName} ${city} VIC`,
        key: "AIzaSyDKNw45VT92V-NWTQokK03QedFFJxVYono"
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
      center: {
        lat: parseFloat(obj.data.results[0].geometry.location.lat),
        lng: parseFloat(obj.data.results[0].geometry.location.lng)
      },
      zoom: 13
    });

    // add hospital marker
    parseHostpitalCoords().map(data => {
      addMarker(data.coord, map, corss, data.name, data.beds);
    });

    //add preschool marker
    paresePreCoords().map(coord => {
      addMarker(coord, map, preSchool);
    });

    paresePrimaryCoords().map(coord => {
      addMarker(coord, map, school);
    });

    //add secondary school marker
    pareseSecondaryCoords().map(coord => {
      addMarker(coord, map, school);
    });

    //add primarySchool marker

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
        lat: parseFloat(obj.data.results[0].geometry.location.lat),
        lng: parseFloat(obj.data.results[0].geometry.location.lng)
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
    <div style={{ height: "90vh", width: "100%" }}>
      <div id="map" />
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDKNw45VT92V-NWTQokK03QedFFJxVYono" }}
        defaultCenter={center}
        defaultZoom={zoom}
        nGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact> */}
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
