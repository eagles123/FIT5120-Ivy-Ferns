import React from "react";
import PageFooter from "./Footer";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import SecondRow from "../common/SecondRow";
import InsertRow from "../common/InsertRow";
import { animateScroll as scroll } from "react-scroll";
import ScrollTop from "react-scrolltop-button";
import MyVideo from "./../common/MyVideo";

export default function HomePageTwo() {
  var response = "";
  while (response !== process.env.REACT_APP_KEY) {
    response = prompt("password");
  }
  //function to handle "know more" scroll to position 700
  function handleScorll() {
    scroll.scrollTo(700);
  }

  return (
    <React.Fragment>
      <div className="home">
        <div className="container-fluid">
          <div className="col s12 m12">
            <MyVideo handleScorll={handleScorll} />
            <div style={{ textAlign: "center", marginBottom: "40px" }} />
            <div className="insertRow">
              <InsertRow />
            </div>

            <div className="secondRow">
              <SecondRow />
            </div>
          </div>
          <ScrollTop
            text="Back to Top"
            distance={200}
            breakpoint={900}
            style={{
              backgroundColor: "#2979ff",
              fontFamily: "Merriweather",
              border: "0px",
              zIndex: 10,
              right: 3
            }}
            className="scroll-your-role"
            speed={1000}
            target={0}
            icon={<UpIcon>edit_icon</UpIcon>}
          />

          <PageFooter />
        </div>
      </div>
    </React.Fragment>
  );
}
