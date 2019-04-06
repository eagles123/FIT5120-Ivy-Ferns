import React from "react";
import Fab from "@material-ui/core/Fab";
import { Fade, Roll } from "react-reveal";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import ImageCard from "./../common/ImageCard";
import NavBar from "./NavBar";
import PageFooter from "./Footer";

export default function HomePage() {
  const image2 = require("../../assets/parallex1.jpg");
  const image3 = require("../../assets/parallex2.jpg");

  return (
    <React.Fragment>
      {/* <div style={{ marginTop: 30 }}>
        <Video videoUrl={require("../../assets/MyVideo.mp4")} />
      </div> */}
      <NavBar about={true} faqs={true} />
      <div className="container-fluid" style={{ marginTop: 100 }}>
        <h2>ARE YOU FACING ANY OF THESE ISSUES?</h2>
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
        <h2 style={{ fontFamily: "Arial" }}>
          IF YES, LET’S EXPLORE REGIONAL VICTORIA!
        </h2>
        <div style={{ margin: 40, textAlign: "center" }}>
          <Link to="/intro">
            <Fab
              variant="extended"
              aria-label="Add"
              color="primary"
              style={{ height: "70px", width: "190px" }}
            >
              {/* <h5>Get Started</h5> */}
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
                Sorted and ranked list of best suburbs in Greater Geelong,
                Greater Bendigo and City of Ballarat
              </p>
            </div>
          </div>
        </div>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
      </div>
      <PageFooter />

      <div />
    </React.Fragment>
  );
}
