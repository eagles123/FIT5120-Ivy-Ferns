import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { getNeighbourThings } from "../../queries/queries";
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
//gloabl varibles
let map;
let newinfoWindow;
let tempNeighbour = [];
function MyMap({ data, neighbours, client }) {
  const [choice, setChoice] = useState([
    "Hospital",
    "Pre-School",
    "Primary School",
    "Secondary School"
  ]);
  //const for markers
  const [hospitalMarker, setHospitals] = useState([]);
  const [preMarkers, setPreMarkers] = useState([]);
  const [priMarkers, setPriMarkers] = useState([]);
  const [secMarkers, setSecMarkers] = useState([]);

  //const for neiboure markers
  const [neigHosMarker, setNeigHops] = useState([]);
  const [neigPre, setNeigPre] = useState([]);
  const [neighPri, setNeiPri] = useState([]);
  const [neigSec, setNeiSec] = useState([]);
  const [fetchNeighbour, setFetch] = useState(false);
  const city = data.city;
  const suburbName = data.suburbName;
  //
  const [neigHosp, setNeiHosp] = useState([]);
  const [neigSchool, setNeiSchool] = useState([]);
  const [count, setCount] = useState(0);

  let obj = {};
  let google = {};
  let legend;
  let temphosMarkers = [];
  let temppreMarkers = [];
  let temppriMarkers = [];
  let tempsecMarkers = [];

  const corss = require("../../assets/cross.png");
  const primary = require("../../assets/primary.png");
  const preSchool = require("../../assets/pre.png");
  const secondary = require("../../assets/secondary.png");
  //load neibour data
  useEffect(() => {
    if (neighbours !== tempNeighbour) {
      tempNeighbour = neighbours;
      client
        .query({
          query: getNeighbourThings,
          variables: { name: neighbours }
        })
        .then(({ data }) => {
          data.suburbsByName.map(item => {
            // temphos = temphos.concat(item.hosptials);
            // tempschool = ["fuck"];
            // console.log(tempschool);

            if (
              item !== null &&
              item.hosptials !== null &&
              item.schools !== null
            ) {
              setNeiHosp(h => h.concat(item.hosptials));
              setNeiSchool(s => s.concat(item.schools));
            }
          });
        });
    }
    setCount(count + 1);
  }, [neighbours]);
  //hook to populate neigbour hospital and school data

  useEffect(() => {
    if (fetchNeighbour) {
      neigHosp.map(data => {
        addMarker(
          parseFloat(data.latitude),
          parseFloat(data.longitude),
          map,
          corss,
          data.hospital_name,
          data.beds,
          data.url,
          newinfoWindow,
          temphosMarkers
        );
      });
      addSchoolMarkers(neigSchool, newinfoWindow);

      setNeigHops(temphosMarkers);
      setNeigPre(temppreMarkers);
      setNeiPri(temppriMarkers);
      setNeiSec(tempsecMarkers);
      resetTemp();
    } else {
      for (let item in neigHosMarker) {
        neigHosMarker[item].setMap(null);
      }
      for (let item in neigPre) {
        neigPre[item].setMap(null);
      }
      for (let item in neighPri) {
        neighPri[item].setMap(null);
      }
      for (let item in neigSec) {
        neigSec[item].setMap(null);
      }
    }
  }, [fetchNeighbour]);

  //hook to show and hide icons
  useEffect(() => {
    if (choice.includes("Hospital")) {
      for (let item in hospitalMarker) hospitalMarker[item].setVisible(true);
      for (let item in neigHosMarker) neigHosMarker[item].setVisible(true);
    } else {
      for (let item in hospitalMarker) hospitalMarker[item].setVisible(false);
      for (let item in neigHosMarker) neigHosMarker[item].setVisible(false);
    }
    if (choice.includes("Pre-School")) {
      for (let item in preMarkers) preMarkers[item].setVisible(true);
      for (let item in neigPre) neigPre[item].setVisible(true);
    } else {
      for (let item in preMarkers) preMarkers[item].setVisible(false);
      for (let item in neigPre) neigPre[item].setVisible(false);
    }

    if (choice.includes("Primary School")) {
      for (let item in priMarkers) priMarkers[item].setVisible(true);
      for (let item in neighPri) neighPri[item].setVisible(true);
    } else {
      for (let item in priMarkers) priMarkers[item].setVisible(false);
      for (let item in neighPri) neighPri[item].setVisible(false);
    }

    if (choice.includes("Secondary School")) {
      for (let item in secMarkers) secMarkers[item].setVisible(true);
      for (let item in neigSec) neigSec[item].setVisible(true);
    } else {
      for (let item in secMarkers) secMarkers[item].setVisible(false);
      for (let item in neigSec) neigSec[item].setVisible(false);
    }
  }, [choice]);

  //methods to parse prop data into required formate

  useEffect(() => {
    Axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: `${suburbName} ${city} VIC`,
        key: process.env.REACT_APP_MAPkEY
      }
    })
      .then(function(response) {
        google = response;
      })
      .then(function() {
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
          .catch(function(error) {});
      })
      .catch(function(error) {
        console.log(error);
      });

    //call from openstreetmap api

    setNeiHosp([]);
    setNeiSchool([]);
  }, []);

  //initialise the map check if API return proper data.
  const initMap = () => {
    if (google.data !== null) {
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: {
          lat: parseFloat(google.data.results[0].geometry.location.lat),
          lng: parseFloat(google.data.results[0].geometry.location.lng)
        },
        zoom: 12
      });
    } else if (google.data.results === null && obj.data !== null) {
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: {
          lat: parseFloat(obj.data[0].lat),
          lng: parseFloat(obj.data[0].lon)
        },
        zoom: 12
      });
    }

    //initialise a infoWindwo
    let infoWindow = new window.google.maps.InfoWindow();
    newinfoWindow = infoWindow;

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
        infoWindow,
        temphosMarkers
      );
    });

    //add school marker
    addSchoolMarkers(data.schools, infoWindow);
    setHospitals(temphosMarkers);
    setPreMarkers(temppreMarkers);
    setPriMarkers(temppriMarkers);
    setSecMarkers(tempsecMarkers);
    resetTemp();
    //polygon boundary
    if (obj.data.length !== 0) {
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
    }
    //code for icon legend
    var icons = {
      Hospital: {
        name: "Hospital",
        icon: corss
      },
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
    if (data.schools.length !== 0 || data.hosptials.length !== 0) {
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

      map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(legend);
    }

    if (data.schools.length === 0) {
      let legendError = document.getElementById("legendError");
      let div = document.createElement("div");
      div.innerHTML = `<p>No Schools in the Suburb</p>`;
      if (div !== null) {
        legendError.appendChild(div);
      }
      map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(
        legendError
      );
    } else if (data.hosptials.length === 0) {
      let legendError = document.getElementById("legendError");
      let div = document.createElement("div");
      div.innerHTML = `<p>No Hospitals in the Suburb</p>`;
      if (div !== null) {
        legendError.appendChild(div);
      }
      map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(
        legendError
      );
    }
  };

  function resetTemp() {
    temphosMarkers = [];
    temppreMarkers = [];
    temppriMarkers = [];
    tempsecMarkers = [];
  }
  function addSchoolMarkers(schoolList, infoWindow) {
    schoolList.map(data => {
      if (data.school_type === "Preschool") {
        addMarker(
          parseFloat(data.latitude),
          parseFloat(data.longitude),
          map,
          preSchool,
          data.school_name,
          null,
          data.url,
          infoWindow,
          temppreMarkers
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
          infoWindow,
          temppriMarkers
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
          infoWindow,
          tempsecMarkers
        );
      }
    });
  }

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
  //function to addMarker
  function addMarker(
    lat,
    lng,
    map,
    icon,
    name,
    beds,
    url,
    infoWindow,
    markers
  ) {
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
    Marker.setMap(map);
    markers.push(Marker);
  }

  //this block is to show and hide this suburb hospital and school
  function handleNeighbour() {
    setFetch(!fetchNeighbour);
  }

  function handleCheckChange(e) {
    setChoice(e.target.value);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <div
        className="row"
        style={{
          marginBottom: "0px"
        }}
      >
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
        </div>
        <div className="col s5 m5 offset-m1">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={fetchNeighbour}
                  onChange={handleNeighbour}
                  color="primary"
                />
              }
              label="Neighbour Hospitals & Schools"
            />
          </FormGroup>
        </div>
      </div>
      <div style={{ height: "90vh", width: "100%", fontSize: "10px" }}>
        <div className="map" id="map" />
        <div id="legend" style={{ backgroundColor: "white", opacity: "0.8" }}>
          <div
            id="legendError"
            style={{ backgroundColor: "white", opacity: "0.8" }}
          />
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
    </div>
  );
}
export default withApollo(MyMap);
