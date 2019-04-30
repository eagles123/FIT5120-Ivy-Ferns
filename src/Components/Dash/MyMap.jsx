import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  ListItemText
} from "@material-ui/core";
import Axios from "axios";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MyMap({ data, neigHosp, neigSchool, handleClick }) {
  const [hosp, setHos] = useState(true);
  const [school, setSchool] = useState(true);
  const [precSchool, setPre] = useState(true);
  const [choice, setChoice] = useState([]);
  //const for markers
  const [hospitalMarker, setHospital] = useState([]);
  const [schMarker, setScMarker] = useState([]);
  //const for neiboure markers
  const [neigHosMarker, setNeigHops] = useState([]);
  const [neigPre, setNeigPre] = useState([]);
  const [neighPri, setNeiPri] = useState([]);
  const [neigSec, setNeiSec] = useState([]);
  const [neighbour, setNeighbour] = useState(false);
  const city = data.city;
  const suburbName = data.suburbName;
  let map;
  let obj = {};
  let legend;
  let hosMarkers = [];
  let schoolMarkers = [];
  const corss = require("../../assets/cross.png");
  const primary = require("../../assets/primary.png");
  const preSchool = require("../../assets/pre.png");
  const secondary = require("../../assets/secondary.png");

  //hook to populate neigbour hospital and school data
  useEffect(() => {
    setNeigHops(neigSchool);
    // setNeigScho(neigHosp);
  }, [neigHosp, neigSchool]);

  // useEffect(() => {}, [neigHosMarker, neigPre, neighPri]);

  // useEffect(() => {
  //   setHosOnAll(hospitalMarker, map);
  //   setSchoolOnAll(schMarker, map);
  //   hosMarkers = [];
  //   schoolMarkers = [];
  // }, [hospitalMarker, schMarker]);

  //methods to parse prop data into required formate

  useEffect(() => {
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
    map = new window.google.maps.Map(document.getElementById("map"), {
      // lat: parseFloat(obj.data.results[0].geometry.location.lat),
      // lng: parseFloat(obj.data.results[0].geometry.location.lng)
      center: {
        lat: parseFloat(obj.data[0].lat),
        lng: parseFloat(obj.data[0].lon)
      },
      zoom: 13
    });
    //initialise a infoWindwo
    let infoWindow = new window.google.maps.InfoWindow();
    // add hospital marker

    data.hosptials.map(data => {
      addMarker(
        parseFloat(data.latitude),
        parseFloat(data.longitude),
        map,
        corss,
        data.hospital_name,
        data.beds,
        data.url,
        infoWindow
      );
    });
    setHospital(hosMarkers);

    //add school marker
    data.schools.map(data => {
      if (data.school_type === "Preschool") {
        addMarker(
          parseFloat(data.latitude),
          parseFloat(data.longitude),
          map,
          preSchool,
          data.school_name,
          null,
          data.url,
          infoWindow
        );
      } else if (data.school_type === "Primary") {
        addMarker(
          parseFloat(data.latitude),
          parseFloat(data.longitude),
          map,
          primary,
          data.school_name,
          null,
          data.url,
          infoWindow
        );
      } else {
        addMarker(
          parseFloat(data.latitude),
          parseFloat(data.longitude),
          map,
          secondary,
          data.school_name,
          null,
          data.url,
          infoWindow
        );
      }
    });

    setScMarker(schoolMarkers);

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

  function addMarker(lat, lng, map, icon, name, beds, url, infoWindow) {
    let Marker = new window.google.maps.Marker({
      position: { lat, lng },
      map: map,
      icon: icon,
      animation: window.google.maps.Animation.DROP
    });
    if (beds !== null) {
      Marker.addListener("click", function() {
        infoWindow.setContent(
          `<a href=${url} target=blank>${name} has approx ${beds} hospital beds</a>`
        );
        infoWindow.open(map, Marker);
      });
    } else {
      Marker.addListener("click", function() {
        infoWindow.setContent(`<a href=${url} target=blank>${name}</a>`);
        infoWindow.open(map, Marker);
      });
    }
    Marker.addListener("mouseover", function() {
      this.setAnimation(window.google.maps.Animation.BOUNCE);
    });

    Marker.addListener("mouseover", function() {
      this.setAnimation(null);
    });
    if (beds !== null) hosMarkers.push(Marker);
    else schoolMarkers.push(Marker);
  }

  //function to set markers on
  // function setHosOnAll(markers, map) {
  //   for (var i = 0; i < hospitalMarker.length; i++) {
  //     markers[i].setMap(map);
  //   }
  // }

  // function setSchoolOnAll(markers, map) {
  //   for (var i = 0; i < schoolMarkers.length; i++) {
  //     markers[i].setMap(map);
  //   }
  // }

  //this block is to show and hide this suburb hospital and school
  useEffect(() => {}, [choice]);

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
  }, [school, precSchool]);

  useEffect(() => {
    for (var item in hospitalMarker) {
      if (hosp) {
        hospitalMarker[item].setVisible(true);
      } else {
        hospitalMarker[item].setVisible(false);
      }
    }
  }, [hosp]);

  function handleNeighbour() {
    setNeighbour(!neighbour);
    if (neighbour) {
      handleClick();
    }
  }

  function handleCheckChange(e) {
    setChoice(e.target.value);
  }
  return (
    <React.Fragment>
      <div className="row" style={{ marginBottom: "0px" }}>
        <div className="col s6 m6">
          <FormControl style={{ minWidth: 120, maxWidth: 200 }}>
            <InputLabel htmlFor="select-multiple-checkbox">Show:</InputLabel>
            <Select
              multiple
              value={choice}
              onChange={handleCheckChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(", ")}
            >
              {[
                "Hospital",
                "Pre-School",
                "Primary School",
                "Secondary School"
              ].map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox
                    checked={choice.indexOf(name) > -1}
                    color="primary"
                  />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* {data.hosptials.length !== 0 || data.schools.length !== 0 ? (
            <span>Show:</span>
          ) : null}
          {data.hosptials.length === 0 ? null : (
            <React.Fragment>
              <Checkbox
                value="Hospital"
                checked={hosp}
                onClick={handleHos}
                color="primary"
              />
              <span>Hospital</span>
            </React.Fragment>
          )}
          {data.schools.length === 0 ? null : (
            <React.Fragment>
              <Checkbox
                checked={school}
                onClick={handleSchool}
                color="primary"
              />
              <span>Schools</span>
            </React.Fragment>
          )} */}
        </div>
        <div className="col s5 m5 offset-m1">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={neighbour}
                  onChange={handleNeighbour}
                  color="primary"
                />
              }
              label="Neighbour Hospitals & Schools"
            />
          </FormGroup>
        </div>
      </div>
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
