import React from "react";
import NavBar from "./NavBar";
import Profile from "./../common/Profile";
import PageFooter from "./Footer";
import { Fade } from "react-reveal";

export default function About() {
  return (
    <React.Fragment>
      <NavBar home={true} faqs={true} />
      <div className="container" style={{ marginTop: 100, height: "100%" }}>
        <Fade>
          <br />
          <h3>Our Vision</h3>
          <div className="row" />
        </Fade>
        <h3>Our Team</h3>
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
            name={"NAGMA GROVER"}
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

      <PageFooter />
    </React.Fragment>
  );
}
