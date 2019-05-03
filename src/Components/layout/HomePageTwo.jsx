import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import PageFooter from "./Footer";
import Script from "react-load-script";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import { animateScroll as scroll } from "react-scroll";
import MyVideo from "./../common/MyVideo";

export default function HomePageTwo() {
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  function handleScorll() {
    scroll.scrollTo(700);
  }
  return (
    <React.Fragment>
      <div className="home">
        {/* <div style={{ marginTop: 30 }}>
        <Video videoUrl={require("../../assets/MyVideo.mp4")} />
      </div> */}

        <div className="container-fluid">
          {/* <video id="background-video" loop autoPlay style={{ width: "90%" }}>
            <source src={"breeze.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <div className="col s12 m12">
            <MyVideo handleScorll={handleScorll} />

            {/* <div
            className="container"
            style={{
              position: "relative",
              paddingTop: "10px",
              paddingBottom: "30px",
              width: "24px",
              height: "24px"
            }}
          >
            <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" />
          </div> */}
            <div style={{ textAlign: "center", marginBottom: "40px" }} />
            {/* <FirstRow /> */}
            <div className="insertRow">
              <InsertRow />
            </div>

            <div className="secondRow">
              <SecondRow />

              <Fab
                color="secondary"
                aria-label="Edit"
                style={{
                  marginLeft: "90%",
                  marginBottom: "1%",
                  backgroundColor: "#4caf50"
                }}
                onClick={() => scroll.scrollToTop()}
              >
                <UpIcon>edit_icon</UpIcon>
              </Fab>

              {/* <i
                className="fas fa-angle-double-up fa-4x"
                onClick={() => scroll.scrollToTop()}
                style={{ cursor: "pointer" }}
              /> */}
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    </React.Fragment>
  );
}
