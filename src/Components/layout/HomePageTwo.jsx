/* global $ */
import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import PageFooter from "./Footer";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import { animateScroll as scroll } from "react-scroll";
import MyVideo from "./../common/MyVideo";

export default function HomePageTwo() {
  // const [position, setPosition] = useState();
  // //show and hide scroll to top
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const setFromEvent = e => setPosition(window.pageYOffset);
  //   window.addEventListener("scroll", setPosition);

  //   if (window.pageYOffset < 500) setShow(false);
  //   if (window.pageYOffset > 500) setShow(true);
  //   return () => {
  //     window.removeEventListener("scroll", setPosition);
  //   };
  // }, [position]);
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
              </Fab>
            </div>
          </div>

          <PageFooter />
        </div>
      </div>
    </React.Fragment>
  );
}
