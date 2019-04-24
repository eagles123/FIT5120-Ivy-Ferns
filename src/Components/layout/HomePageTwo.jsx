import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import PageFooter from "./Footer";
import FirstRow from "../common/FirstRow";
import SecondRow from "../common/SecondRow";
import Carousel from "nuka-carousel";
export default function HomePageTwo() {
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
        <div
          className="jarallax text parallax-3"
          data-jarallax-video="https://youtu.be/iBxYAjCUqvg"
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
                  fontFamily: "Merriweather",
                  color: "white"
                }}
              >
                Get Started
              </span>
            </Fab>
          </Link>
        </div>
        {/* <div
          style={{
            backgroundColor: "#dcedc8",
            width: "100%",
            float: "left",
            height: "150px"
          }}
          id="color"
        > */}
        <h5 style={{ fontFamily: "Merriweather", textAlign: "center" }}>
          Know More
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
          <div className="chevron" />
          <div className="chevron" />
          <div className="chevron" />
        </div>
        {/* </div> */}
        <FirstRow />
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h5>Why?</h5>
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
            <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" />
          </div>
        </div>
        <div className="secondRow">
          <SecondRow />
        </div>
      </div>
      {/* <h3>ARE YOU FACING ANY OF THESE ISSUES?</h3>
        <div className="row">
          <div className="title col s10 m4" style={{ paddingRight: 40 }}>
            <Fade>
              <ImageCard title={"TOO CROWDED?"} image={"/home1_1.png"} />
            </Fade>
          </div>
          <div className="title col s10 m4" style={{ paddingRight: 40 }}>
            <Fade delay={300}>
              <ImageCard title={"CAN'T AFFORD IT?"} image={"/home2_1.png"} />
            </Fade>
          </div>
          <div className="title col s10 m4 " style={{ paddingRight: 40 }}>
            <Fade delay={600}>
              <ImageCard
                title={"BEEN FORCED TO MOVE?"}
                image={"/home3_1.png"}
              />
            </Fade>
          </div>
        </div>
        <h3 style={{ fontFamily: "Arial" }}>
          IF YES, LET’S EXPLORE REGIONAL VICTORIA!
        </h3>
        <div style={{ margin: 40, textAlign: "center" }}>
          <Link to="/intro">
            <Fab
              variant="extended"
              aria-label="Add"
              color="primary"
              style={{ height: "70px", width: "190px" }}
            >
              Get Started
            </Fab>
          </Link>
        </div> */}

      <PageFooter />
      {/* <svg>
        <g>
          <path d=" M178.203 103.081L129 74.673V101H23v4h106v26.488l49.203-28.407z" />
        </g>
      </svg> */}

      <div />
    </React.Fragment>
  );
}