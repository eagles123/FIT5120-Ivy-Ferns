import React, { useState } from "react";
import Button from "@material-ui/core/Button";
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
    <div
      style={{
        width: "95%",
        height: "14vh",
        background: "#8CE1EC",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        textAlign: "center"
      }}
    >
      <div
        className="content"
        style={{ paddingTop: "10px", marginTop: "10px" }}
      >
        <div className="row">
          <div className="col s3 m3">
            <img className="responsive" src={"/education.png"} alt="" />
          </div>
          <div className="col s8 m8 offset-m1">
            <h6>Education</h6>
            <Button style={{ backgroundColor: "#dcedc8" }} onClick={handleOpen}>
              Learn More
            </Button>
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
                      <p style={{ textAlign: "center" }}>
                        No. of Primary-School
                      </p>
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
                      <p style={{ textAlign: "center" }}>
                        No. of Secondary-School
                      </p>
                      <p style={{ textAlign: "center" }}>{secondary_school}</p>
                    </div>
                  </div>
                </DashItem>
              </AniUl>
            </Rodal>
          </div>
        </div>
      </div>
    </div>
  );
}
