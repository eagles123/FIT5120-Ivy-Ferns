import React from "react";
import { AniItem } from "./../common/AniComponent";
import { Link } from "react-router-dom";
import StyledButton from "./../common/StyleButton";

const SubListResult = ({ suburb }) => {
  return (
    <AniItem className="item">
      <div className="col s12 m12">
        <div
          style={{
            width: "350px",
            height: "80px",
            backgroundColor: "#d4e157",
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
          <div className="row">
            <div className="col s6 m6">
              <p style={{ padding: "0px 0 0 10px" }}>{suburb.city}</p>
            </div>
            <div className="col s4 m2 offset-m1">
              <Link to={`dashboard/${suburb._id}`} key={suburb._id}>
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AniItem>
  );
};

export default SubListResult;
