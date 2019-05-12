import React from "react";
import "../../css/table.css";
import CountUp from "react-countup";

function CompareTable({ compareSuburbs }) {
  return (
    <div className="row compare">
      <div className="col-12 mt-5 text-center">
        <table className="table striped">
          <thead className="thead-default">
            <tr>
              <th />
              {compareSuburbs.map(suburb => (
                <th key={suburb._id}>
                  <h5 style={{ fontWeight: "bold" }}>{suburb.suburbName}</h5>
                  <p style={{ textAlign: "center" }}>({suburb.city})</p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td align="center" colspan={compareSuburbs.length + 1}>
                <h5 style={{ fontWeight: "bold" }}>Health Care</h5>
              </td>
            </tr>
            <tr className="hospitals">
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
            <tr className="capacity">
              <th scope="row">Hospital Capacity</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  {suburb.health.beds}
                </td>
              ))}
            </tr>
            <tr>
              <td align="center" colSpan={compareSuburbs.length + 1}>
                <h5 style={{ fontWeight: "bold" }}>Education</h5>
              </td>
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
            <tr>
              <td align="center" colSpan={compareSuburbs.length + 1}>
                <h5 style={{ fontWeight: "bold" }}>Property /Rental Price</h5>
              </td>
            </tr>
            <tr className="housePrice">
              <th scope="row">Median House Price</th>
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
            <tr className="rental">
              <th scope="row">1 Bed Flat Per Week</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  <CountUp
                    start={0}
                    end={suburb.property.flat1}
                    duration={1}
                    separator=","
                    decimals={0}
                    prefix="$"
                  />
                </td>
              ))}
            </tr>
            <tr className="rental">
              <th scope="row">2 Beds Flat Per Week</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  <CountUp
                    start={0}
                    end={suburb.property.flat2}
                    duration={1}
                    separator=","
                    decimals={0}
                    prefix="$"
                  />
                </td>
              ))}
            </tr>
            <tr className="rental">
              <th scope="row">3 Beds Flat Per Week</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  <CountUp
                    start={0}
                    end={suburb.property.flat3}
                    duration={1}
                    separator=","
                    decimals={0}
                    prefix="$"
                  />
                </td>
              ))}
            </tr>
            <tr className="rental">
              <th scope="row">2 Beds House Per Week</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  <CountUp
                    start={0}
                    end={suburb.property.house2}
                    duration={1}
                    separator=","
                    decimals={0}
                    prefix="$"
                  />
                </td>
              ))}
            </tr>
            <tr className="rental">
              <th scope="row">3 Beds House Per Week</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  <CountUp
                    start={0}
                    end={suburb.property.house3}
                    duration={1}
                    separator=","
                    decimals={0}
                    prefix="$"
                  />
                </td>
              ))}
            </tr>
            <tr className="rental">
              <th scope="row">4 Beds Flat Per Week</th>
              {compareSuburbs.map(suburb => (
                <td key={suburb._id} className="text-center">
                  <CountUp
                    start={0}
                    end={suburb.property.house4}
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
}
export default CompareTable;
