import React from "react";
import NavBar from "./NavBar";
import Profile from "./../common/Profile";
import { Fade, Roll, Flip } from "react-reveal";

export default function About() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: 100 }}>
        <Fade>
          <h3>About US</h3>
          <br />
          <h4 style={{ paddingLeft: 30 }}>OUR VISION</h4>
          <div class="row">
            <p
              className="col s12 m9 offset-m1"
              style={{ fontSize: 20, marginBottom: 100 }}
            >
              IVY FERNS is a group of passionate and enthusiastic students, who
              are aiming to support people looking to move and live in Regional
              Victoria. As Ivies are popular in their native range and can adopt
              to different climates, they are significant for their aesthetics
              and their evergreen foliage. Therefore, our team is aiming to
              build a solution that is evergreen and adaptable to the
              ever-changing needs of the population living in Regional Victoria.
            </p>
          </div>
        </Fade>
        <Fade delay={300}>
          <Profile
            img={"vijiya.png"}
            name={"VIJIYA SINGH TOMAR"}
            degree={"Student at Monash Univeristy"}
            desp={
              " Vijiya is currently pursuing her Masters in Business Information Systems and she is our team’s user interface design and documentation expert."
            }
          />
        </Fade>
        <Fade delay={300}>
          <Profile
            img={"nagma.png"}
            name={"VIJIYA SINGH TOMAR"}
            degree={"Student at Monash Univeristy"}
            desp={
              " Nagma is currently pursuing her Masters in Business Information Systems and she is our team’s User Interface design and documentation expert."
            }
          />
        </Fade>
        <Fade>
          <Profile
            img={"sam.png"}
            name={"SAMUEL CHEUNG"}
            degree={"Student at Monash Univeristy"}
            desp={
              "  Samuel is currently pursuing his Masters in Data Science and he is our team’s Data Analyst."
            }
          />
        </Fade>
        <Fade>
          <Profile
            img={"kevin.png"}
            name={"KEVIN FENG"}
            degree={"Student at Monash Univeristy"}
            desp={
              " Kevin is currently pursuing his Masters in Information Technology      and he is our team’s web development expert."
            }
          />
        </Fade>
      </div>
    </React.Fragment>
  );
}
