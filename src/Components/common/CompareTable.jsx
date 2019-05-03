import React from "react";
import "./table.css";
import CountUp from "react-countup";

const CompareTable = ({ compareSuburbs }) => (
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table striped">
        <thead className="thead-default">
          <tr>
            <th />
            {compareSuburbs.map(suburb => (
              <th key={suburb._id}>{suburb.suburbName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Hospitals</th>
            {compareSuburbs.map(suburb => (
              <td key={suburb._id} className="text-center">
                {suburb.health.hospital}
              </td>
            ))}
          </tr>
          <tr className="gp">
            <th scope="row">General Practitioners(GPs)</th>
            {compareSuburbs.map(suburb => (
              <td key={suburb._id} className="text-center">
                <CountUp
                  start={0}
                  end={suburb.health.gps}
                  duration={1}
                  separator=","
                  decimals={0}
                />
              </td>
            ))}
          </tr>
          <tr className="preSchool">
            <th scope="row">Pre-School</th>
            {compareSuburbs.map(suburb => (
              <td key={suburb._id} className="text-center">
                {suburb.education.pre_school}
              </td>
            ))}
          </tr>
          <tr className="priSchool">
            <th scope="row">Primary-School</th>
            {compareSuburbs.map(suburb => (
              <td key={suburb._id} className="text-center">
                {suburb.education.primary_school}
              </td>
            ))}
          </tr>
          <tr className="secSchool">
            <th scope="row">Secondary-School</th>
            {compareSuburbs.map(suburb => (
              <td key={suburb._id} className="text-center">
                {suburb.education.secondary_school}
              </td>
            ))}
          </tr>
          <tr className="housePrice">
            <th scope="row">Secondary-School</th>
            {compareSuburbs.map(suburb => (
              <td key={suburb._id} className="text-center">
                <CountUp
                  start={100000}
                  end={suburb.property.price}
                  duration={1}
                  separator=","
                  decimals={0}
                  prefix="$"
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CompareTable;
