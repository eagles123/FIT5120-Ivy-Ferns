import React from "react";
import { Roll } from "react-reveal";

export default function FirstRow() {
  return (
    <div className="bgsection ">
      <div className="firstRow">
        <div className="row" id="firstRow">
          <h3
            style={{
              paddingTop: "40px",
              color: "black",
              fontFamily: "Arial Black"
            }}
          >
            What we do?
          </h3>
          <hr />
          <div className="col s12 m4">
            <Roll left>
              <img style={{ paddingLeft: 30 }} src={"carton1.png"} alt="" />
            </Roll>
            <p style={{ fontSize: 20, textAlign: "center" }}>
              Personalised user preference based solution
            </p>
          </div>
          <div className="col s12 m4">
            <Roll left>
              <img style={{ paddingLeft: 30 }} src={"carton2.png"} alt="" />
            </Roll>
            <p style={{ fontSize: 20, textAlign: "center" }}>
              Sorted and ranked list of Suburbs
            </p>
          </div>
          <div className="col s12 m4">
            <Roll left>
              <img style={{ paddingLeft: 30 }} src={"carton4.png"} alt="" />
            </Roll>
            <p style={{ fontSize: 20, textAlign: "center" }}>
              Statistical data analysis for each Suburb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
