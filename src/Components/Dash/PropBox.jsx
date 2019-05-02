import React from "react";
import CountUp from "react-countup";

export default function PropBox({ data }) {
  let price = data.price;
  return (
    <div className="content" style={{ paddingTop: "10px", marginTop: "10px" }}>
      <img src={"/property.png"} alt="" />
      <div>
        <h6>House Price</h6>
        <CountUp
          start={0}
          end={price}
          duration={1.4}
          separator=","
          decimals={0}
          prefix="Medium: $"
        />
      </div>
    </div>
  );
}
