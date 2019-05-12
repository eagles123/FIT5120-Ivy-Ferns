import React, { useState } from "react";
import AniImg from "../common/AniImg";
import Grow from "@material-ui/core/Grow";

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
      className="content"
      style={{ paddingTop: "10px", marginTop: "10px", textAlign: "center" }}
    >
      <div style={{ margin: "0 auto" }}>
        <AniImg
          img={"/health.png"}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 100,
          marginTop: "-15px",
          marginLeft: "-15px"
        }}
      >
        <Grow in={isOpen}>
          <div style={{ backgroundColor: "#ffcc80", borderRadius: "10px" }}>
            {" "}
            <p style={{ textAlign: "left", paddingLeft: 10, paddingTop: 10 }}>
              {" "}
              Hospitals: {hospital}
            </p>
            <p style={{ textAlign: "left", paddingLeft: 10, paddingRight: 10 }}>
              {" "}
              General practitioners(GPs): {gps}{" "}
            </p>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>
              {" "}
              Hospital beds: {beds}
            </p>{" "}
          </div>
        </Grow>
      </div>
      <h6>Health Care</h6>
    </div>
  );
}
