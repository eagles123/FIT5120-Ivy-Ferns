import React, { useEffect, useState } from "react";
// import SuburbResult from "./SuburbResult";
import styled from "styled-components";
import SubListResult from "./SubListResult";
import CircularProgress from "@material-ui/core/CircularProgress";

const SuburList = ({ suburbs, choice, change }) => {
  const Container = styled.div`
    border-radius: 10px;
    height: 470px;
    width: 350px;
    background-color: #ff5252;
    color: white;
    margin-top: 0px;
    margin-left: 45px;
  `;

  //code for animate the list
  const [prev, setPrev] = useState(change);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setPrev(change);
    }, 500);
    return () => clearTimeout(timeout);
  }, [change]);

  // useEffect(() => {
  //   setTimeout(toggle, 800);
  // }, []);

  // function toggle() {
  //   setAnimate(true);
  // }

  // function handleChange(list) {
  //   setChange(list);
  // }

  function checkSuburb(suburbs) {
    if (suburbs.length === 0)
      return (
        <Container>
          <h4 style={{ paddingTop: "100px", textAlign: "center" }}>
            There is no such suuburb...
          </h4>
        </Container>
      );
  }

  return (
    <React.Fragment>
      {choice.healthField ||
      choice.educationField ||
      choice.propertyField ||
      choice.jobField ? (
        checkSuburb(suburbs) ||
        (change !== prev ? (
          <Container>
            <div className="container" style={{ padding: "150px 0 0 100px" }}>
              <CircularProgress />
            </div>
          </Container>
        ) : (
          suburbs.map(c => (
            // {/* <SuburbResult key={suburb.name} suburb={suburb} /> */}
            <SubListResult key={c._id} suburb={c} />
          ))
        ))
      ) : (
        <Container>
          <h5 style={{ paddingTop: "100px", textAlign: "center" }}>
            Please Choose Your Preference First!
          </h5>
        </Container>
      )}
    </React.Fragment>
  );
};

export default SuburList;
