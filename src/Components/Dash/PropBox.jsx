import React from "react";
import CountUp from "react-countup";

export default function PropBox({ data }) {
  let price = data.price;
  return (
    <div
      style={{
        width: "95%",
        height: "14vh",
        background: "#8BD9B6",
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
            <img src={"/property.png"} alt="" />
          </div>
          <div className="col s8 m8 offset-m1">
            <h6>Property</h6>
            <CountUp
              start={0}
              end={price}
              duration={1.4}
              separator=","
              decimals={0}
              prefix="Average: $"
            />
          </div>
        </div>
      </div>
    </div>
  );
}