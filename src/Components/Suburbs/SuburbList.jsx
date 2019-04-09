import React from "react";
import SuburbResult from "./SuburbResult";

const SuburList = ({ suburbs, choice }) => {
  function checkSuburb(suburbs) {
    if (suburbs.length === 0)
      return (
        <div
          style={{
            borderRadius: "10px",
            height: "500px",
            width: "350px",
            backgroundColor: "#ff5252",
            color: "white"
          }}
        >
          <h4 style={{ paddingTop: "100px", textAlign: "center" }}>
            There is no match
          </h4>
        </div>
      );
  }
  return (
    <div className="suburb-list section">
      {checkSuburb(suburbs)}
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
            height: "500px",
            width: "350px",
            backgroundColor: "#ff5252",
            color: "white"
          }}
        >
          <h4 style={{ paddingTop: "100px", textAlign: "center" }}>
            Please Choose Your Preference First!
          </h4>
        </div>
      )}
    </div>
  );
};

export default SuburList;
