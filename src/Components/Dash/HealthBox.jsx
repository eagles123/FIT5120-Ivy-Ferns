import React, { useState } from "react";
import AniImg from "../common/AniImg";
import { AniUl, DashItem } from "./../common/AniComponent";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default function HealthBox({ data }) {
  const [isOpen, setOpen] = useState(false);
  const { hospital, gps, beds } = data;
  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="content" style={{ paddingTop: "10px", marginTop: "10px" }}>
      <AniImg img={"/health.png"} handleOpen={handleOpen} />
      {/* <img
        src={}
        alt=""
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      /> */}
      <h6>Health Care</h6>

      <Rodal
        visible={isOpen}
        onClose={handleClose}
        width={700}
        height={500}
        animation={"door"}
      >
        <AniUl pose={isOpen ? "open" : "closed"}>
          <DashItem className="dashitem">
            <div className="row">
              <div className="icon col s4 m4">
                <img className="responsive" src={"/hosp.png"} alt="" />
              </div>
              <div className="col s7 m7 offset-m1">
                <p style={{ textAlign: "center" }}>No. of Hospitals:</p>
                <p style={{ textAlign: "center" }}>{hospital}</p>
              </div>
            </div>
          </DashItem>

          <DashItem className="dashitem">
            <div className="row">
              <div className="icon col s4 m4">
                <img className="responsive" src={"/gps.png"} alt="" />
              </div>
              <div className="col s7 m7 offset-m1">
                <p style={{ textAlign: "center" }}>
                  No. of General practitioners(GPs)
                </p>
                <p style={{ textAlign: "center" }}>{gps}</p>
              </div>
            </div>
          </DashItem>

          <DashItem className="dashitem">
            <div className="row">
              <div className="icon col s4 m4">
                <img className="responsive" src={"/bed.png"} alt="" />
              </div>
              <div className="col s7 m7 offset-m1">
                <p style={{ textAlign: "center" }}>No. of Hospital beds</p>
                <p style={{ textAlign: "center" }}>{beds}</p>
              </div>
            </div>
          </DashItem>
        </AniUl>
      </Rodal>
    </div>
  );
}
