/* global $ */
import React, { useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import PageFooter from "./Footer";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import { animateScroll as scroll } from "react-scroll";
import ScrollTop from "react-scrolltop-button";
import MyVideo from "./../common/MyVideo";

export default function HomePageTwo() {
  var response = "";
  while (response !== "ivy") {
    response = prompt("password");
  }
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

  // useEffect(() => {
  //   localStorage.removeItem("score");
  // });

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
