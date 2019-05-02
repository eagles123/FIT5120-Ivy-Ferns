import React, { useState, useEffect, useContext } from "react";
import { graphql } from "react-apollo";
import { getSuburbByIdQuery } from "../../queries/queries";
import DashList from "../Dash/DashList";
import HealthBox from "./../Dash/HealthBox";
import EdBox from "../Dash/EdBox";
import PropBox from "../Dash/PropBox";
// import JobBox from "../Dash/JobBox";
import SchoolChart from "../Dash/SchoolChart";
import { ChoiceContext } from "../context/ParameterContext";
import MyMap from "./../Dash/MyMap"; //check
import StyledButton from "./../common/StyleButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import RentalChart from "./../Dash/RentalChart";

function DataDashBoard(props) {
  const { choice } = useContext(ChoiceContext);
  const [neighbours, setNeighbours] = useState([]);

  //const to pass neighoubr hospitals and school to MyMap

  function handlePre() {
    props.history.push("/recommend");
  }

  //set neibours list from fetched data
  useEffect(() => {
    if (props.data.loading === false)
      setNeighbours(props.data.suburb.neighbours[0].neighbour);
  }, [props.data.loading]);

  //fetch neighbour hospitals and schools on click

  return props.data.loading ? (
    <div className="container" style={{ margin: "0 auto" }}>
      <CircularProgress style={{ marginTop: "40vh", marginLeft: "30vw" }} />
    </div>
  ) : (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col s12 m2">
          <StyledButton onClick={handlePre}>Back</StyledButton>
          <DashList props={props} />
        </div>
        <div className="col s12 m5 ">
          <h4 style={{ textAlign: "center", marginTop: "50px" }}>
            {props.data.suburb.suburbName}, {props.data.suburb.city}
          </h4>
          <MyMap data={props.data.suburb} neighbours={neighbours} />

          {/* <div className="boardbox col s2 m3">
                <JobBox data={props.data.suburb.job} />
              </div> */}
        </div>
        <div className="col s12 m5 ">
          <div className="row">
            <div className="boardbox col s2 m4">
              <HealthBox data={props.data.suburb.health} />
            </div>
            <div className="boardbox col s2 m4 ">
              <EdBox data={props.data.suburb.education} />
            </div>
            <div className="boardbox col s2 m4">
              <PropBox data={props.data.suburb.property} />
            </div>
            {/* <div className="col s5 m5 ">
              <MyMap
                data={props.data.suburb}
                neighbours={neighbours}
                style={{ paddingTop: "-100px" }}
              />
            </div> */}
          </div>
          <div style={{ backgroundColor: "rgba(220,220,220, .4)" }}>
            <SchoolChart data={props.data.suburb.schools} />
          </div>
          <br />
          <div style={{ backgroundColor: "rgba(220,220,220, .4)" }}>
            <RentalChart data={props.data.suburb.property} />
          </div>
          {/* <JobChart /> */}
        </div>
      </div>
    </div>
  );
}
export default graphql(getSuburbByIdQuery, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(DataDashBoard);

// export default compose(
//   graphql(getSuburbByIdQuery, {
//     options: props => {
//       return {
//         variables: {
//           id: props.match.params.id
//         }
//       };
//     }
//   }),
//   graphql(getNebours, { options: props })
// );
// export default DataDashBoard;
