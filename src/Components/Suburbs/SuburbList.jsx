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
            backgroundColor: "#e91e63",
            color: "white",
            margineTop: "1px"
          }}
        >
          <h4 style={{ paddingTop: "100px", textAlign: "center" }}>
            There is no such suuburb...
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
            backgroundColor: "#e91e63",
            color: "white"
          }}
        >
          <h5 style={{ paddingTop: "100px", textAlign: "center" }}>
            Please Choose Your Preference First!
          </h5>
        </div>
      )}
    </div>
  );
};

export default SuburList;
