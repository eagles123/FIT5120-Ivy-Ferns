import React, { useContext } from "react";
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

function DataDashBoard(props) {
  const { choice } = useContext(ChoiceContext);
  function handlePre() {
    props.history.push("/recommend");
  }

  return props.data.loading ? (
    <div className="container" style={{ margin: "0 auto" }}>
      <CircularProgress style={{ marginTop: "40vh", marginLeft: "30vw" }} />
    </div>
  ) : (
    <div className="dashpage">
      <div className="container-fluid">
        <h4 style={{ textAlign: "center" }}>
          {props.data.suburb.suburbName}, {props.data.suburb.city}
        </h4>
        <div className="row">
          <div className="col s12 m2">
            <StyledButton onClick={handlePre}>Back</StyledButton>
            <DashList query={getSuburbByIdQuery} props={props} />
          </div>
          <div className="col s12 m10 dashboard">
            <div className="row">
              <div className="boardbox col s2 m4">
                {choice.healthField ? (
                  <HealthBox
                    data={props.data.suburb.health}
                    width={"100%"}
                    height={"16vh"}
                  />
                ) : (
                  <HealthBox
                    data={props.data.suburb.health}
                    width={"90%"}
                    height={"12vh"}
                  />
                )}
              </div>
              <div className="boardbox col s2 m4 ">
                {choice.educationField ? (
                  <EdBox
                    data={props.data.suburb.education}
                    width={"100%"}
                    height={"16vh"}
                  />
                ) : (
                  <EdBox
                    data={props.data.suburb.education}
                    width={"90%"}
                    height={"12vh"}
                  />
                )}
              </div>
              <div className="boardbox col s2 m4">
                {choice.propertyField ? (
                  <PropBox
                    data={props.data.suburb.property}
                    width={"100%"}
                    height={"16vh"}
                  />
                ) : (
                  <PropBox
                    data={props.data.suburb.property}
                    width={"90%"}
                    height={"12vh"}
                  />
                )}
              </div>
              {/* <div className="boardbox col s2 m3">
                <JobBox data={props.data.suburb.job} />
              </div> */}
            </div>
            <div className="row">
              <div className="col s5 m5 board">
                <MyMap data={props.data.suburb} />
              </div>
              <div className="col s6 m6 board">
                <SchoolChart data={props.data.suburb.schools} />
                {/* <JobChart data={props.data.suburb.job} /> */}
              </div>
            </div>
          </div>
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

// export default DataDashBoard;
