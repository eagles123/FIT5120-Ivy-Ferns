import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import PageFooter from "./Footer";
import FirstRow from "../common/FirstRow";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";

import { animateScroll as scroll } from "react-scroll";

export default function HomePageTwo() {
  var response = "";
  while (response !== "ivy") {
    response = prompt("password");
  }
  return (
    <React.Fragment>
      {/* <div style={{ marginTop: 30 }}>
        <Video videoUrl={require("../../assets/MyVideo.mp4")} />
      </div> */}

      <div className="container-fluid">
        {/* <video id="background-video" loop autoPlay style={{ width: "90%" }}>
            <source src={"breeze.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        <div className="col s12 m12">
          <div
            className="jarallax text parallax-3 col s12 m12"
            // data-jarallax-video="https://youtu.be/iBxYAjCUqvg"
            data-jarallax-video="mp4:./file.mp4"
          >
            <p style={{ marginBottom: "0px" }}>Planning to move to</p>
            <p style={{ paddingTop: "0px", marginTop: "0px" }}>
              Regional Victoria?
            </p>
            <Link to="/intro">
              <Fab
                variant="extended"
                aria-label="Add"
                color="primary"
                style={{
                  height: "40px",
                  width: "150px"
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    color: "white"
                  }}
                >
                  Get Started
                </span>
              </Fab>
            </Link>
          </div>
          <h5
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => scroll.scrollTo(650)}
          >
            Know More{" "}
            <i
              class="fas fa-chevron-down fa-1x"
              onClick={() => scroll.scrollTo(650)}
              style={{ cursor: "pointer" }}
            />
          </h5>

          <div
            className="container"
            style={{
              position: "relative",
              paddingTop: "10px",
              paddingBottom: "30px",
              width: "24px",
              height: "24px"
            }}
          >
            {/* <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" /> */}
          </div>
          <div style={{ textAlign: "center", marginBottom: "40px" }} />
          <FirstRow />
          <div className="insertRow">
            <InsertRow />
          </div>
          <div className="secondRow">
            <SecondRow />
            <i
              className="fas fa-angle-double-up fa-4x"
              onClick={() => scroll.scrollToTop()}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <PageFooter />
      </div>
    </React.Fragment>
  );
}
