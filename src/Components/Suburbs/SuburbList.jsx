import React from "react";
import SuburbResult from "./SuburbResult";

const SuburList = ({ suburbs }) => {
  return (
    <div className="suburb-list section">
      {suburbs &&
        suburbs.map(suburb => (
          <div key={suburb.id} className="row">
            <SuburbResult key={suburb.id} suburb={suburb} />
          </div>
        ))}
    </div>
  );
};

export default SuburList;
