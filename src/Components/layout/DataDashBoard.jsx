import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { getSuburbByIdQuery } from "../../queries/queries";
import DashList from "../Dash/DashList";
import HealthBox from "./../Dash/HealthBox";
import EdBox from "../Dash/EdBox";
import PropBox from "../Dash/PropBox";
// import JobBox from "../Dash/JobBox";
import SchoolChart from "../Dash/SchoolChart";
import MyMap from "./../Dash/MyMap";
import RentalChart from "./../Dash/RentalChart";
import Sidebar from "react-sidebar";
import { Fab, CircularProgress, Tooltip } from "@material-ui/core/";
import Carousel from "nuka-carousel";
import ReactTooltip from "react-tooltip";

function DataDashBoard(props) {
  //initialise the state
  const [neighbours, setNeighbours] = useState([]);
  const [open, setOpen] = useState(false);
  const [slideIndex, setIndex] = useState(0);

  //const to pass neighoubr hospitals and school to MyMap
  function handlePre() {
    props.history.push("/recommend");
  }

  //handle list open
  function handleOpen() {
    setOpen(!open);
  }

  //set neibours list from fetched data
  useEffect(() => {
    if (props.data.loading === false)
      setNeighbours(props.data.suburb.neighbours[0].neighbour);
  }, [props.data.loading]);

  //reset the slide index when come back to the data dashboard
  useEffect(() => {
    setIndex(0);
  }, [props.data.loading]);

  function handleCompare() {
    props.history.push(`/compare/${props.match.params.id}`);
  }

  //fetch neighbour hospitals and schools on click
  return props.data.loading ? (
    <div
      className="container dashboard"
      style={{ margin: "0 auto", height: "800px" }}
    >
      <CircularProgress style={{ marginTop: "40vh", marginLeft: "50vw" }} />
    </div>
  ) : (
    <div className="container-fluid dashboard">
      <Sidebar
        sidebar={
          <DashList
            props={props}
            index={props.match.params.id}
            handleOpen={handleOpen}
          />
        }
        open={open}
        onSetOpen={handleOpen}
        styles={{ sidebar: { background: "#9ccc65" } }}
      />
      <div className="row">
        <div style={{ position: "absolute", marginLeft: 10 }}>
          <Tooltip title="Back" placement="right">
            <Fab
              variant="extended"
              color="primary"
              aria-label="Add"
              onClick={handlePre}
              style={{ margin: "20px 0px 0px 0px", width: "6vw" }}
            >
              {" "}
              Back{" "}
            </Fab>
          </Tooltip>
          <p>
            <Tooltip title="Suburb List" placement="right">
              <Fab
                size="small"
                color="primary"
                aria-label="Add"
                onClick={handleOpen}
                style={{ margin: "55px 0px 0px 0px" }}
              >
                <i className="fas fa-bars" />
              </Fab>
            </Tooltip>
          </p>
        </div>
        <div className="col s12 m5" style={{ marginLeft: 50, zIndex: 0 }}>
          <h4
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginLeft: "-50px",
              paddingLeft: "-50px"
            }}
          >
            {props.data.suburb.suburbName}, {props.data.suburb.city}
            <span>
              {" "}
              <i
                className="fas fa-info-circle"
                data-tip="mapTool"
                data-for="mapTool"
                style={{
                  cursor: "pointer",
                  color: "#2962ff",
                  position: "relative",
                  zIndex: 0
                }}
              />
            </span>
            <ReactTooltip place="right" id="mapTool" type="info" effect="solid">
              <p style={{ width: "250px", textAlign: "left" }}>
                The map shows the hospitals and schools available in this
                suburb. The approximate number of hospital beds in a hospital
                can be viewed by clicking on that respective hospital icon. You
                can also access the website of the hospitals and schools shown
                on the map by clicking on their respective names. The
                neighbouring hospitals and schools are visible by selecting the
                option “Neighbouring Hospitals and Schools”, and they cover the
                hospitals and schools located in three of the nearest suburbs.
              </p>
            </ReactTooltip>
          </h4>
          <MyMap data={props.data.suburb} neighbours={neighbours} />
        </div>
        <div className="col s12 m6 " style={{ marginLeft: 20 }}>
          <div className="row">
            <div className="boardbox col s3 m2 offset-m1">
              <HealthBox data={props.data.suburb.health} />
            </div>
            <div className="boardbox col s3 m2 offset-m1">
              <EdBox data={props.data.suburb.education} />
            </div>
            <div className="boardbox col s3 m2 offset-m1">
              <PropBox data={props.data.suburb.property} />
            </div>
            <div className="boardbox col s3 m2 offset-m1 ">
              <Tooltip title="Compare with other Suburbs">
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="Add"
                  onClick={handleCompare}
                  style={{ margin: "20px 0px 0px 0px", width: "7vw" }}
                >
                  Compare
                </Fab>
              </Tooltip>
            </div>
          </div>
          <h5 style={{ textAlign: "center" }}>School & Rental Statistics</h5>
          <div style={{ backgroundColor: "rgba(220,220,220, .4)" }}>
            <Carousel
              slideIndex={slideIndex}
              afterSlide={slideIndex => {
                setIndex(slideIndex);
              }}
              renderBottomCenterControls={null}
              renderCenterLeftControls={({ previousSlide }) =>
                slideIndex === 0 ? null : (
                  <Tooltip title="School Stats" placement="top">
                    <i
                      className="fas fa-chevron-circle-left fa-lg"
                      onClick={previousSlide}
                      style={{ cursor: "pointer" }}
                    />
                  </Tooltip>
                )
              }
              renderCenterRightControls={({ nextSlide }) =>
                slideIndex === 1 ? null : (
                  <Tooltip title="Rental Stats" placement="top">
                    <i
                      className="fas fa-chevron-circle-right fa-lg"
                      onClick={nextSlide}
                      style={{ cursor: "pointer" }}
                    />
                  </Tooltip>
                )
              }
            >
              <SchoolChart data={props.data.suburb.schools} />
              <RentalChart data={props.data.suburb.property} />
            </Carousel>
          </div>
          <br />

          {/* <JobChart /> */}
        </div>
      </div>
    </div>
  );
}
export default graphql(getSuburbByIdQuery, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(DataDashBoard);
