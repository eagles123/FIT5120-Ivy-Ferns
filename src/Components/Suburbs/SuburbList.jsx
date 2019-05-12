import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubListResult from "./SubListResult";
import { AniUl } from "./../common/AniComponent";

const SuburList = ({ suburbs, choice, city }) => {
  const Container = styled.div`
    border-radius: 10px;
    height: 470px;
    width: 350px;
    background-color: #9ccc65;
    color: white;
    margin-top: 0px;
    margin-left: 5vw;
  `;

  //code for animate the list
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(true);
  function handleOpen() {
    setOpen(false);
  }

  // const [prev, setPrev] = useState(change);

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setPrev(change);
  //   }, 500);
  //   return () => clearTimeout(timeout);
  // }, [change]);

  function handleClos() {
    setOpen(true);
  }
  useEffect(() => {
    handleOpen();
    let timeout = setTimeout(() => {
      handleClos();
      setData(suburbs);
    }, 300);
    return () => clearTimeout(timeout);
  }, [suburbs]);

  //check for searchbox filter
  function checkSuburb(suburbs) {
    if (suburbs.length === 0)
      return (
        <Container>
          <h4
            style={{ color: "black", paddingTop: "100px", textAlign: "center" }}
          >
            There is no such suburb...
          </h4>
        </Container>
      );
  }

  function checkCity(city) {
    if (
      city.geelong === false &&
      city.ballarat === false &&
      city.bendigo === false
    )
      return (
        <Container>
          <h4
            style={{ color: "black", paddingTop: "100px", textAlign: "center" }}
          >
            Please Choose At Least One Local Government Area!
          </h4>
        </Container>
      );
  }

  return (
    <React.Fragment>
      {choice.healthField || choice.educationField || choice.propertyField ? (
        checkSuburb(suburbs) ||
        checkCity(city) || (
          <AniUl className="slidebar" pose={isOpen ? "open" : "closed"}>
            {data.map(d => (
              //change to _id when deploy
              <SubListResult key={d.suburbName} suburb={d} />
            ))}
          </AniUl>
        )
      ) : (
        <Container>
          <h5
            style={{ color: "black", paddingTop: "100px", textAlign: "center" }}
          >
            Please Choose Your Preference First!
          </h5>
        </Container>
      )}
    </React.Fragment>
  );
};

export default SuburList;
