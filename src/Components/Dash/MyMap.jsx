import React, { useState, useEffect, useReducer } from "react";
import { legendReducer } from "./../reducer/legendReducer";
import { withApollo } from "react-apollo";
import { getNeighbourThings } from "../../queries/queries";
import {
  Checkbox,
  Switch,
  FormGroup,
  FormControlLabel,
  Collapse,
  ListItem,
  ListItemText,
  Fab,
  Tooltip
} from "@material-ui/core";
import Axios from "axios";

//gloabl varibles
let map;
let newinfoWindow;
let tempNeighbour = [];
function MyMap({ data, neighbours, client }) {
  const [check, setCheck] = useState(false);
  //state to control to show icon and legends
  const [legend, dispatchLegend] = useReducer(legendReducer, {
    hospital: true,
    preSchool: true,
    primary: true,
    secondary: true
  });

  // const [choice, setChoice] = useState([
  //   "Hospital",
  //   "Pre-School",
  //   "Primary School",
  //   "Secondary School"
  // ]);
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
    if (legend.hospital) {
      for (let item in hospitalMarker) hospitalMarker[item].setVisible(true);
      for (let item in neigHosMarker) neigHosMarker[item].setVisible(true);
    } else {
      for (let item in hospitalMarker) hospitalMarker[item].setVisible(false);
      for (let item in neigHosMarker) neigHosMarker[item].setVisible(false);
    }
    if (legend.preSchool) {
      for (let item in preMarkers) preMarkers[item].setVisible(true);
      for (let item in neigPre) neigPre[item].setVisible(true);
    } else {
      for (let item in preMarkers) preMarkers[item].setVisible(false);
      for (let item in neigPre) neigPre[item].setVisible(false);
    }

    if (legend.primary) {
      for (let item in priMarkers) priMarkers[item].setVisible(true);
      for (let item in neighPri) neighPri[item].setVisible(true);
    } else {
      for (let item in priMarkers) priMarkers[item].setVisible(false);
      for (let item in neighPri) neighPri[item].setVisible(false);
    }

    if (legend.secondary) {
      for (let item in secMarkers) secMarkers[item].setVisible(true);
      for (let item in neigSec) neigSec[item].setVisible(true);
    } else {
      for (let item in secMarkers) secMarkers[item].setVisible(false);
      for (let item in neigSec) neigSec[item].setVisible(false);
    }
  }, [legend]);

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
  };

  function handleCheck() {
    setCheck(!check);
  }

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

  const legends = [
    {
      label: "Hospital",
      icon: corss,
      check: legend.hospital,
      action: checkHostpital
    },
    {
      label: "Pre-School",
      icon: preSchool,
      check: legend.preSchool,
      action: checkPre
    },
    {
      label: "Primary School",
      icon: primary,
      check: legend.primary,
      action: checkPri
    },
    {
      label: "Secondary School",
      icon: secondary,
      check: legend.secondary,
      action: checkSec
    }
  ];

  function checkHostpital() {
    dispatchLegend({ type: "Hospital", payload: !legend.hospital });
  }
  function checkPre() {
    dispatchLegend({ type: "Pre-School", payload: !legend.preSchool });
  }
  function checkPri() {
    dispatchLegend({ type: "Primary", payload: !legend.primary });
  }
  function checkSec() {
    dispatchLegend({ type: "Secondary", payload: !legend.secondary });
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

  // function handleCheckChange(e) {
  //   setChoice(e.target.value);
  // }

  return (
    <div>
      <div
        className="row"
        style={{
          marginBottom: "0px"
        }}
      >
        <div className="col s6 m6">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={fetchNeighbour}
                  onChange={handleNeighbour}
                  color="primary"
                />
              }
              label="Neighbouring Hospitals & Schools"
            />
          </FormGroup>
        </div>
        <div className="col s2 m2 offset-m4">
          <Tooltip title="Map Legend" placement="right">
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={handleCheck}
              style={{ margin: "10px 0px 10px 0px" }}
            >
              <i className="fas fa-map-marked-alt" />
            </Fab>
          </Tooltip>
          {/* <i
            className="fas fa-filter fa-2x"
            style={{
              color: "black",
              cursor: "pointer",
              position: "relative",
              zIndex: 0
            }}
            onClick={handleCheck}
          /> */}
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              zIndex: 999
            }}
          >
            <Collapse in={check}>
              <div>
                {legends.map(legend => (
                  <ListItem
                    key={legend.label}
                    role={undefined}
                    dense
                    button
                    onClick={legend.action}
                  >
                    <Checkbox checked={legend.check} color="primary" />{" "}
                    <img src={legend.icon} />
                    <ListItemText
                      style={{ fontSize: "15px" }}
                      primary={legend.label}
                    />
                  </ListItem>
                ))}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <div style={{ height: "75vh", width: "100%", fontSize: "10px" }}>
        <div className="map" id="map" />
        <div id="legend" style={{ backgroundColor: "white", opacity: "0.8" }}>
          <div
            id="legendError"
            style={{ backgroundColor: "white", opacity: "0.8" }}
          />
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
