import React, { useState } from "react";
import Button from "@material-ui/core/Button";
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
    <div
      style={{
        width: "95%",
        height: "14vh",
        background: "#71AEE5",
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
            <img src={"/health.png"} alt="" />
          </div>
          <div className="col s8 m8 offset-m1">
            <h6>Health</h6>
            <Button onClick={handleOpen}>Learn More</Button>
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
                      <img src={"/hosp.png"} alt="" />
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
                      <img src={"/gps.png"} alt="" />
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
                      <img src={"/bed.png"} alt="" />
                    </div>
                    <div className="col s7 m7 offset-m1">
                      <p style={{ textAlign: "center" }}>
                        No. of Hospital beds
                      </p>
                      <p style={{ textAlign: "center" }}>{beds}</p>
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
