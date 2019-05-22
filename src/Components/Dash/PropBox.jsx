import React, { useState } from "react";
import CountUp from "react-countup";
import AniImg from "../common/AniImg";
import Grow from "@material-ui/core/Grow";

export default function PropBox({ data }) {
  const [isOpen, setOpen] = useState(false);

  const { price, rent_all } = data;
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
        img={"/property.png"}
        handleOpen={handleOpen}
        handleClose={handleClose}
        isOpen={isOpen}
      />
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
            <p
              style={{
                textAlign: "left",
                paddingLeft: 10,
                paddingTop: 10,
                paddingRight: 10
              }}
            >
              {
                <CountUp
                  start={0}
                  end={price}
                  duration={1}
                  separator=","
                  decimals={0}
                  prefix="Median House Price: $"
                />
              }
            </p>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>
              {" "}
              Median Rental Price: ${rent_all}
            </p>
            <p style={{ textAlign: "center" }}>
              (See details in the graph below)
            </p>
          </div>
        </Grow>
      </div>
      <h6 style={{ fontSize: "1vw" }}>Property</h6>
    </div>
  );
}
