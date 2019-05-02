import React, { useState } from "react";
import AniImg from "../common/AniImg";
import { AniUl, DashItem } from "./../common/AniComponent";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default function EdBox({ data }) {
  const [isOpen, setOpen] = useState(false);
  const { pre_school, primary_school, secondary_school } = data;

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div className="content" style={{ paddingTop: "10px", marginTop: "10px" }}>
      <AniImg img={"/education.png"} handleOpen={handleOpen} />
      {/* <img
        src={"/education.png"}
        alt=""
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      /> */}
      <h6>Education</h6>

      <Rodal
        visible={isOpen}
        onClose={handleClose}
        width={700}
        height={500}
        animation={"flip"}
      >
        <AniUl pose={isOpen ? "open" : "closed"}>
          <DashItem className="dashitem">
            <div className="row">
              <div className="icon col s4 m4">
                <img src={"/a.png"} alt="" />
              </div>
              <div className="col s7 m7 offset-m1">
                <p style={{ textAlign: "center" }}>No. of Pre-School</p>
                <p style={{ textAlign: "center" }}>{pre_school}</p>
              </div>
            </div>
          </DashItem>

          <DashItem className="dashitem">
            <div className="row">
              <div className="icon col s4 m4">
                <img className="responsive" src={"/rt.png"} alt="" />
              </div>
              <div className="col s7 m7 offset-m1">
                <p style={{ textAlign: "center" }}>No. of Primary-School</p>
                <p style={{ textAlign: "center" }}>{primary_school}</p>
              </div>
            </div>
          </DashItem>

          <DashItem className="dashitem">
            <div className="row">
              <div className="icon col s4 m4">
                <img className="responsive" src={"/dt.png"} alt="" />
              </div>
              <div className="col s7 m7 offset-m1">
                <p style={{ textAlign: "center" }}>No. of Secondary-School</p>
                <p style={{ textAlign: "center" }}>{secondary_school}</p>
              </div>
            </div>
          </DashItem>
        </AniUl>
      </Rodal>
    </div>
  );
}
