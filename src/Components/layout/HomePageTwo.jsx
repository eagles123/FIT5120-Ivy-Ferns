import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import PageFooter from "./Footer";
import FirstRow from "../common/FirstRow";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";
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
        <h5 style={{ textAlign: "center" }}>Know More</h5>
        <div
          className="container"
          style={{
            position: "relative",
            paddingTop: "10px",
            paddingBottom: "30px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
          }}
          onClick={() => window.scrollTo(0, 600)}
        >
          <div className="chevron" />
          <div className="chevron" />
          <div className="chevron" />
        </div>

        <FirstRow />
        <div style={{ textAlign: "center", marginBottom: "40px" }} />
        <div className="insertRow">
          <InsertRow />
        </div>
        <div className="secondRow">
          <SecondRow />
        </div>
      </div>

      <PageFooter />
    </React.Fragment>
  );
}
