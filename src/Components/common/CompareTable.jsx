import React, { useState, useEffect } from "react";
import "../../css/table.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

function CompareTable({ compareSuburbs }) {
  const [hospital, setHos] = useState([]);
  const [gps, setGp] = useState([]);
  const [beds, setBeds] = useState([]);
  const [pre, setPre] = useState([]);
  const [pri, setPri] = useState([]);
  const [sec, setSec] = useState([]);
  const [house, setHouse] = useState([]);
  const [onef, setOnef] = useState([]);
  const [twof, setTwof] = useState([]);
  const [thref, setThref] = useState([]);
  const [twoh, setTwoh] = useState([]);
  const [threeh, setThreeh] = useState([]);
  const [fourh, setFourh] = useState([]);

  useEffect(() => {
    let tempHos = [];
    let tempgps = [];
    let tempbeds = [];
    let temppre = [];
    let temppri = [];
    let tempsec = [];
    let temphouse = [];
    let temponef = [];
    let temptowf = [];
    let tempthref = [];
    let temptwoh = [];
    let tempthreeh = [];
    let tempfourh = [];
    for (let item in compareSuburbs) {
      tempHos.push(compareSuburbs[item].health.hospital);
      tempgps.push(compareSuburbs[item].health.gps);
      tempbeds.push(compareSuburbs[item].health.beds);
      temppre.push(compareSuburbs[item].education.pre_school);
      temppri.push(compareSuburbs[item].education.primary_school);
      tempsec.push(compareSuburbs[item].education.secondary_school);
      temphouse.push(compareSuburbs[item].property.price);
      temponef.push(compareSuburbs[item].property.flat1);
      temptowf.push(compareSuburbs[item].property.flat2);
      tempthref.push(compareSuburbs[item].property.flat3);
      temptwoh.push(compareSuburbs[item].property.house2);
      tempthreeh.push(compareSuburbs[item].property.house3);
      tempfourh.push(compareSuburbs[item].property.house4);
    }
    setHos(tempHos);
    setGp(tempgps);
    setBeds(tempbeds);
    setPre(temppre);
    setPri(temppri);
    setSec(tempsec);
    setHouse(temphouse);
    setOnef(temponef);
    setTwof(temptowf);
    setThref(tempthref);
    setTwoh(temptwoh);
    setThreeh(tempthreeh);
    setFourh(tempfourh);
  }, [compareSuburbs]);
  // console.log(data.hosptial);
  // console.log(Math.max())

  function isMax(number, list) {
    if (number === Math.max(...list)) return true;
    else return false;
  }

  function isMin(number, list) {
    if (number === Math.min(...list)) return true;
    else return false;
  }

  function checkAllSame(list) {
    if ([...new Set(list)].length === 1) return false;
    else return true;
  }
  return (
    <div className="row compare">
      <div className="col-12 mt-5 text-center">
        <table className="table striped">
          <thead className="thead-default">
            <tr>
              <th />
              {compareSuburbs.map(suburb => (
                <th key={suburb._id}>
                  <Link
                    to={{
                      pathname: `/dashboard/${suburb._id}`
                    }}
                    key={suburb._id}
                  >
                    <h6
                      style={{
                        fontWeight: "bold",
                        position: "relative",
                        zIndex: 100
                      }}
                    >
                      {suburb.suburbName}
                    </h6>
                  </Link>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "15px",
                      position: "relative",
                      zIndex: 100
                    }}
                  >
                    ({suburb.city})
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td align="center" colSpan={compareSuburbs.length + 1}>
                <h6 style={{ fontWeight: "bold" }}>Health Care</h6>
              </td>
            </tr>
            <tr className="hospitals">
              <th scope="row">Hospitals</th>
              {compareSuburbs.map(suburb =>
                hospital.length > 1 &&
                isMax(suburb.health.hospital, hospital) &&
                suburb.health.hospital > 0 &&
                checkAllSame(hospital) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {suburb.health.hospital}
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
                  <td key={suburb._id} className="text-center">
                    {suburb.health.hospital}
                  </td>
                )
              )}
            </tr>
            <tr className="gp">
              <th scope="row">General Practitioners (GPs)</th>
              {compareSuburbs.map(suburb =>
                gps.length > 1 &&
                isMax(suburb.health.gps, gps) &&
                suburb.health.gps > 0 &&
                checkAllSame(gps) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {suburb.health.gps}
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
                  <td key={suburb._id} className="text-center">
                    {suburb.health.gps}
                  </td>
                )
              )}
            </tr>
            <tr className="capacity">
              <th scope="row">Hospital Capacity</th>
              {compareSuburbs.map(suburb =>
                beds.length > 1 &&
                isMax(suburb.health.beds, beds) &&
                suburb.health.beds > 0 &&
                checkAllSame(beds) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {suburb.health.beds}
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
                  <td key={suburb._id} className="text-center">
                    {suburb.health.beds}
                  </td>
                )
              )}
            </tr>
            <tr>
              <td align="center" colSpan={compareSuburbs.length + 1}>
                <h6 style={{ fontWeight: "bold" }}>Education</h6>
              </td>
            </tr>
            <tr className="preSchool">
              <th scope="row">Pre-School</th>
              {compareSuburbs.map(suburb =>
                pre.length > 1 &&
                isMax(suburb.education.pre_school, pre) &&
                suburb.education.pre_school > 0 &&
                checkAllSame(pre) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {suburb.education.pre_school}
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
                  <td key={suburb._id} className="text-center">
                    {suburb.education.pre_school}
                  </td>
                )
              )}
            </tr>
            <tr className="priSchool">
              <th scope="row">Primary-School</th>
              {compareSuburbs.map(suburb =>
                pri.length > 1 &&
                isMax(suburb.education.primary_school, pri) &&
                suburb.education.primary_school > 0 &&
                checkAllSame(pri) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {suburb.education.primary_school}
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
                  <td key={suburb._id} className="text-center">
                    {suburb.education.primary_school}
                  </td>
                )
              )}
            </tr>
            <tr className="secSchool">
              <th scope="row">Secondary-School</th>
              {compareSuburbs.map(suburb =>
                sec.length > 1 &&
                isMax(suburb.education.secondary_school, sec) &&
                suburb.education.secondary_school > 0 &&
                checkAllSame(sec) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {suburb.education.secondary_school}
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
                  <td key={suburb._id} className="text-center">
                    {suburb.education.secondary_school}
                  </td>
                )
              )}
            </tr>
            <tr>
              <td align="center" colSpan={compareSuburbs.length + 1}>
                <h6 style={{ fontWeight: "bold" }}>Property /Rental Price</h6>
              </td>
            </tr>
            <tr className="housePrice">
              <th scope="row">Median House Price</th>
              {compareSuburbs.map(suburb =>
                house.length > 1 &&
                isMin(suburb.property.price, house) &&
                suburb.property.price > 0 &&
                checkAllSame(house) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={100000}
                        end={suburb.property.price}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
            <tr className="rental">
              <th scope="row">1 Bed Flat Per Week</th>
              {compareSuburbs.map(suburb =>
                onef.length > 1 &&
                isMin(suburb.property.flat1, onef) &&
                suburb.property.flat1 > 0 &&
                checkAllSame(onef) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={0}
                        end={suburb.property.flat1}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
            <tr className="rental">
              <th scope="row">2 Beds Flat Per Week</th>
              {compareSuburbs.map(suburb =>
                twof.length > 1 &&
                isMin(suburb.property.flat2, twof) &&
                suburb.property.flat2 > 0 &&
                checkAllSame(twof) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={0}
                        end={suburb.property.flat2}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
            <tr className="rental">
              <th scope="row">3 Beds Flat Per Week</th>
              {compareSuburbs.map(suburb =>
                thref.length > 1 &&
                isMin(suburb.property.flat3, thref) &&
                suburb.property.flat3 > 0 &&
                checkAllSame(thref) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={0}
                        end={suburb.property.flat3}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
            <tr className="rental">
              <th scope="row">2 Beds House Per Week</th>
              {compareSuburbs.map(suburb =>
                twoh.length > 1 &&
                isMin(suburb.property.house2, twoh) &&
                suburb.property.house2 > 0 &&
                checkAllSame(twoh) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={0}
                        end={suburb.property.house2}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
            <tr className="rental">
              <th scope="row">3 Beds House Per Week</th>
              {compareSuburbs.map(suburb =>
                threeh.length > 1 &&
                isMin(suburb.property.house3, threeh) &&
                suburb.property.house3 > 0 &&
                checkAllSame(threeh) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={0}
                        end={suburb.property.house3}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
            <tr className="rental">
              <th scope="row">4 Beds Flat Per Week</th>
              {compareSuburbs.map(suburb =>
                fourh.length > 1 &&
                isMin(suburb.property.house4, fourh) &&
                suburb.property.house4 > 0 &&
                checkAllSame(fourh) ? (
                  <td key={suburb._id} className="text-center">
                    <h6 style={{ fontWeight: "bold" }}>
                      <CountUp
                        style={{ fontSize: "20px" }}
                        start={0}
                        end={suburb.property.house4}
                        duration={1}
                        separator=","
                        decimals={0}
                        prefix="$"
                      />
                      <sup>*</sup>
                    </h6>
                  </td>
                ) : (
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
                )
              )}
            </tr>
          </tbody>
        </table>
        <div className="right">
          <sup>*</sup>Best figure for the parameter
        </div>
      </div>
    </div>
  );
}
export default CompareTable;
