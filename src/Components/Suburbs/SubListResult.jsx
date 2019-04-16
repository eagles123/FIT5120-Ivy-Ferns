import React from "react";
import { AniItem } from "../common/AniComponent";

const SubListResult = ({ suburb }) => {
  return (
    <div className="col s12 m12">
      <div
        style={{
          color: "white",
          width: "350px",
          height: "70px",
          backgroundColor: "#ff5252",
          marginBottom: "10px",
          marginLeft: "45px",
          borderRadius: "10px",
          boxShadow:
            "1px 2px 3px 2px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.5), 0px 2px 1px -1px rgba(0,0,0,0.12)"
        }}
      >
        <h6 style={{ padding: "10px 0 0 10px" }}>
          No.{suburb.rank} Suburb: {suburb.suburbName}
        </h6>
        <p style={{ padding: "0px 0 0 10px" }}>{suburb.city}</p>
      </div>
    </div>
  );
};

export default SubListResult;
