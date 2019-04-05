import React from "react";
import NavBar from "./NavBar";
import Profile from "./../common/Profile";
import { Fade, Roll, Flip } from "react-reveal";

export default function About() {
  return (
    <React.Fragment>
      <NavBar home={true} faqs={true} />
      <div className="container" style={{ marginTop: 100 }}>
        <Fade>
          <h3
            style={{
              fontFamily: "Arial Black"
            }}
          >
            ABOUT US
          </h3>
          <br />
          <h3 style={{ paddingLeft: 20 }}>Our Vision</h3>
          <div className="row">
            <p
              className="col s12 m9 offset-m1"
              style={{ fontSize: 20, marginBottom: 100 }}
            >
              IvyFerns is a project aiming to support migrants or existing
              residents of Victoria, considering to move to Regional Victoria
              specifically to suburbs in Greater Geelong, Ballarat, Greater
              Bendigo. This platform guides the users towards the most suitable
              suburb based on their personal inputs and filters covering four
              key areas that are necessary for leading a quality life, i.e.
              education, employment, health and property. 
            </p>
          </div>
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
    </React.Fragment>
  );
}
