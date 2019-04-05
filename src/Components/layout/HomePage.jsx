import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import { Fade, Roll, Flip } from "react-reveal";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import ImageCard from "../ImageCard";
import NavBar from "./NavBar";

export default function HomePage() {
  const image2 = require("../../assets/bg1.png");
  const image3 = require("../../assets/bg2.png");

  return (
    <React.Fragment>
      {/* <div style={{ marginTop: 30 }}>
        <Video videoUrl={require("../../assets/MyVideo.mp4")} />
      </div> */}
      <NavBar about={true} faqs={true} />
      <div className="container-fluid" style={{ marginTop: 100 }}>
        <h2>ARE YOU FACING ANY OF THESE ISSUES?</h2>
        <div className="row">
          <div className="col s10 m4">
            <Fade>
              <ImageCard title={"TOO CROWED?"} image={"/home4.png"} />
            </Fade>
          </div>
          <div className="col s10 m4">
            <Fade delay={300}>
              <ImageCard title={"CAN'T AFFORD IT?"} image={"/home2.png"} />
            </Fade>
          </div>
          <div className="col s10 m4 ">
            <Fade delay={600}>
              <ImageCard title={"BEEN FORCED TO MOVE?"} image={"/home3.png"} />
            </Fade>
          </div>
        </div>
        <h2 style={{ fontFamily: "Arial" }}>
          IF YES, LET’S EXPLORE REGIONAL VICTORIA!
        </h2>
        <div style={{ margin: 40, textAlign: "center" }}>
          <Link to="/intro">
            <Fab variant="extended" aria-label="Add" color="primary">
              Get Started
            </Fab>
          </Link>
        </div>
      </div>

      <div>
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 500 }} />
        </Parallax>
        <div className="container">
          <div className="row" id="secondRow">
            <h3
              style={{
                marginBottom: "80px",
                color: "black",
                fontFamily: "Arial Black"
              }}
            >
              OUR SERVICES
            </h3>
            <div className="col s12 m5 offset-m1">
              <Roll left>
                <img src={"carton1.png"} alt="" />
              </Roll>
              <p style={{ fontSize: 25 }}>User preference-based solution</p>
            </div>
            <div className="col s12 m5 offset-m1">
              <Roll left>
                <img style={{ paddingLeft: 60 }} src={"carton2.png"} alt="" />
              </Roll>
              <p style={{ fontSize: 25, textAlign: "center" }}>
                Sorted and ranked list of best Suburbs in Greater Geelong,
                Greater Bendigo and City of Ballarat
              </p>
            </div>
          </div>
        </div>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
        <footer>
          <div className="row">
            <div className="col s12 m6">
              <h5>
                Copyright @ IvyFerns – Building Comfort in Regional Victoria
              </h5>
            </div>
            <div className="col s12 m3">
              <h5 style={{ paddingLeft: "260px" }}>Connect With Us</h5>
            </div>
            <div className="col s12 m1">
              <a href="https://www.linkedin.com/groups/13700361/">
                <i style={{ margin: 10 }} class="fab fa-linkedin fa-3x" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      <div />
    </React.Fragment>
  );
}
