/* global $ */
import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import PageFooter from "./Footer";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import { animateScroll as scroll } from "react-scroll";
import ScrollTop from "react-scrolltop-button";
import MyVideo from "./../common/MyVideo";
import Script from "react-load-script";
import { Link } from "react-router-dom";
import HomeVideo from "./../common/HomeVideo";

export default function HomePageTwo() {
  // if (performance.navigation.type == 2) {
  //   document.location.reload(true);
  // }

  // var response = "";
  // while (response !== "ivy") {
  //   response = prompt("password");
  // }
  // const [position, setPosition] = useState();
  // //show and hide scroll to top
  // const [show, setShow] = useState(false);

  //function to handle "know more"
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
            {/* <HomeVideo /> */}
            <div style={{ textAlign: "center", marginBottom: "40px" }} />
            {/* <FirstRow /> */}
            <div className="insertRow">
              <InsertRow />
            </div>

            <div className="secondRow">
              <SecondRow />
              {/* <Fab
                color="primary"
                aria-label="Edit"
                style={{
                  marginLeft: "95%",
                  marginBottom: "1%",
                  // position: "fixed",
                  zIndex: 100
                }}
                onClick={() => scroll.scrollToTop()}
              >
                <UpIcon>edit_icon</UpIcon>
              </Fab> */}
            </div>
          </div>
          <ScrollTop
            text="Back to Top"
            distance={200}
            breakpoint={2000}
            style={{ backgroundColor: "#3f51b5", border: "0px" }}
            className="scroll-your-role"
            speed={1000}
            target={75}
            icon={<UpIcon>edit_icon</UpIcon>}
          />

          <PageFooter />
        </div>
      </div>
    </React.Fragment>
  );
}
