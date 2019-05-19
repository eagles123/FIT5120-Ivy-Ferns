import React, { useState } from "react";
import AniImg from "../common/AniImg";
import Grow from "@material-ui/core/Grow";

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
      className="content"
      style={{ paddingTop: "3px", marginTop: "3px", textAlign: "center" }}
    >
      <AniImg
        img={"/education.png"}
        handleOpen={handleOpen}
        handleClose={handleClose}
        isOpen={isOpen}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          marginTop: "-15px",
          marginLeft: "-15px"
        }}
      >
        <Grow in={isOpen}>
          <div
            style={{
              backgroundColor: "#ffcc80",
              borderRadius: "10px",
              lineHeight: "0.9em"
            }}
          >
            {" "}
            <p style={{ textAlign: "left", paddingLeft: 10, paddingTop: 10 }}>
              {" "}
              Pre-School: {pre_school}
            </p>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>
              {" "}
              Primary-School: {primary_school}{" "}
            </p>
            <p style={{ textAlign: "left", paddingLeft: 10, paddingRight: 10 }}>
              {" "}
              Secondary-School: {secondary_school}
            </p>{" "}
            <p style={{ textAlign: "left", paddingLeft: 10, paddingRight: 10 }}>
              (See details in the graph below)
            </p>
          </div>
        </Grow>
      </div>
      <h6>Education</h6>
    </div>
  );
}
