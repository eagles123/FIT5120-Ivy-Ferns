import React from "react";
import SuburbResult from "./SuburbResult";

const SuburList = ({ suburbs, choice }) => {
  return (
    <div className="suburb-list section">
      {choice.healthField ||
      choice.educationField ||
      choice.propertyField ||
      choice.jobField ? (
        suburbs.map(suburb => (
          <div key={suburb.name} className="row">
            <SuburbResult key={suburb.name} suburb={suburb} />
          </div>
        ))
      ) : (
        <div
          style={{
            borderRadius: "10px",
            height: "570px",
            width: "350px",
            backgroundColor: "#ff5252",
            color: "white"
          }}
        >
          <h4 style={{ paddingTop: "100px", textAlign: "center" }}>
            Please Choose Your Perference First!
          </h4>
        </div>
      )}
    </div>
  );
};

export default SuburList;
