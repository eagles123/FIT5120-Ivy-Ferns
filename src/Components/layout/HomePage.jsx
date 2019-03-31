import React, { useState } from "react";
import ImageBox from "../common/ImageBox";
import Fab from "@material-ui/core/Fab";
import Video from "../common/Video";
import { Fade, LightSpeed, Flip } from "react-reveal";
import LineChart from "../common/Charts/LineChart";
import { Parallax } from "react-parallax";
import DonutChart from "./../common/Charts/DonutChart";
import { Link } from "react-router-dom";

export default function HomePage() {
  const image1 = require("../../assets/houseparallax.png");
  const image2 = require("../../assets/people.png");
  const image3 = require("../../assets/job.png");

  return (
    <React.Fragment>
      <Video videoUrl={require("../../assets/MyVideo.mp4")} />
      <div className="container-fluid" id="firstRow">
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
        <div className="row" id="firstRow">
          <div className="col s5 m4 offset-m1">
            <Fade duration={2000}>
              <p>
                Regional Victoria (also known as country Victoria) encompasses
                all the areas of the state of Victoria outside Melbourne.
                Regional Victoria contains much of Australia’s geographical and
                biological diversity. Journey through our pristine forests;
                witness the dramatic scenery of our mountain ranges; taste the
                exotic flavours of our gourmet produce; walk along our many
                hiking trails; enjoy our many rivers and lakes; visit our many
                towns and attractions. There is so much to see and experience in
                regional Victoria.
              </p>
            </Fade>
          </div>
          <div className="col s5 m5 offset-m2">
            <Fade left>
              <ImageBox quote="this is a image box text" image="country.png" />
            </Fade>
          </div>
        </div>

        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
        <div className="row" id="secondRow">
          <div className="col s5 m4 offset-m1">
            <Fade left>
              <LineChart />
            </Fade>
          </div>
          <div className="col s5 m5 offset-m1">
            <Fade duration={2000}>
              <p>
                eact-gsap lets you use the GreenSock Animation Platform (GSAP)
                in React in a fully declarative way. It abstracts away the
                direct use of the GSAP classes TweenMax and TimelineMax. If you
                need the full control it's possible by getting low level access
                to the underlying objects. In addition to that it has it's own
                SVG drawing Plugin and some useful helper components.
              </p>
              <Link to="/match">
                <Fab variant="extended" aria-label="Add" color="primary">
                  Get Started
                </Fab>
              </Link>
            </Fade>
          </div>
        </div>
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>
        <div className="row" id="firstRow">
          <div className="col s5 m4 offset-m1">
            <LightSpeed duration={1000}>
              <p>
                Regional Victoria (also known as country Victoria) encompasses
                all the areas of the state of Victoria outside Melbourne.
                Regional Victoria contains much of Australia’s geographical and
                biological diversity. Journey through our pristine forests;
                witness the dramatic scenery of our mountain ranges; taste the
                exotic flavours of our gourmet produce; walk along our many
                hiking trails; enjoy our many rivers and lakes; visit our many
                towns and attractions. There is so much to see and experience in
                regional Victoria.
              </p>
              <Link to="/recommend">
                <Fab variant="extended" aria-label="Add" color="primary">
                  Advance Search
                </Fab>
              </Link>
            </LightSpeed>
          </div>
          <div className="col s5 m5 offset-m2">
            <Fade left>
              <DonutChart />
            </Fade>
          </div>
        </div>
      </div>

      <div />
    </React.Fragment>
  );
}
