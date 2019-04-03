import React, { useState } from "react";
import ImageBox from "../common/ImageBox";
import Fab from "@material-ui/core/Fab";
import Video from "../common/Video";
import { Fade, Roll, Flip } from "react-reveal";
import LineChart from "../common/Charts/LineChart";
import { Parallax } from "react-parallax";
import DonutChart from "./../common/Charts/DonutChart";
import BarChart from "./../common/Charts/BarChart";
import { Link } from "react-router-dom";
import ImageCard from "./../ImageCard";
import NavBar from "./NavBar";

export default function HomePageTwo() {
  const image1 = require("../../assets/houseparallax.png");
  const image2 = require("../../assets/people.png");
  const image3 = require("../../assets/job.png");

  return (
    <React.Fragment>
      {/* <div style={{ marginTop: 30 }}>
        <Video videoUrl={require("../../assets/MyVideo.mp4")} />
      </div> */}
      <div className="container-fluid" style={{ marginTop: 100 }}>
        <h2>ARE YOU FACING ANY OF THESE ISSUES?</h2>
        <div className="row">
          <div className="col s10 m4">
            <ImageCard title={"Can't Fit in?"} image={"/home1.png"} />
          </div>
          <div className="col s10 m4">
            <ImageCard title={"Can't Afford it?"} image={"/home2.png"} />
          </div>
          <div className="col s10 m4 ">
            <ImageCard title={"Being Forced to Move?"} image={"/home3.png"} />
          </div>
        </div>
        <h2>IF YES, LET’S EXPLORE REGIONAL VICTORIA!</h2>
        <div style={{ margin: 40, textAlign: "center" }}>
          <Link to="/intro">
            <Fab variant="extended" aria-label="Add" color="primary">
              Get Started
            </Fab>
          </Link>
        </div>
      </div>

      <div>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
        <div className="container">
          <div className="row" id="secondRow">
            <h3 style={{ marginBottom: "80px", color: "black" }}>
              OUR SERVICES
            </h3>
            <div className="col s12 m5 offset-m2">
              <Roll left>
                <img src={"carton1.png"} alt="" />
              </Roll>
              <h4>User preference based solution</h4>
            </div>
            <div className="col s12 m5">
              <Roll left>
                <img src={"carton2.png"} alt="" />
              </Roll>
              <h4>
                Sorted and ranked list of best Suburbs in Greater Geelong,
                Greater Bendigo and City of Ballarat
              </h4>
            </div>
          </div>
        </div>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
        <footer>
          <h5 style={{ textAlign: "center", color: "white" }}>
            Copyright @ IvyFerns – Building Comfort in Regional Victoria
          </h5>
        </footer>
      </div>

      <div />
    </React.Fragment>
  );
}
