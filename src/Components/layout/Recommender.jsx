import React, { useState, useReducer, useEffect } from "react";
import SidePanel from "./SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { ParameterContext } from "../context/ParameterContext";
import { getAllSuburbs } from "../services/fakeSuburbList";
import { recommd } from "../services/recommend";
import NavBar from "./NavBar";

const Recommender = () => {
  // const [state, dispatch] = useReducer(parameterReducr, []);

  //read in the data when compomentDidMount
  // useEffect(() => {
  //   getAllSuburbs;
  // }, []);

  //state and reducer to maniplate the slider value
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "HEALTH":
          return {
            ...state,
            healthScore: Math.round(action.payload)
          };
        case "EDUCATION":
          return {
            ...state,
            educationScore: Math.round(action.payload)
          };
        case "BUYORRENT":
          return {
            ...state,
            propertyType: action.payload
          };
        case "PROPERTY":
          return {
            ...state,
            propertyScore: Math.round(action.payload)
          };
        case "JOB":
          return {
            ...state,
            jobScore: Math.round(action.payload)
          };
        default: {
          return state;
        }
      }
    },
    {
      healthScore: 5,
      educationScore: 5,
      propertyType: "buy",
      propertyScore: 5,
      jobScore: 5
    }
  );
  const [initialSuburb, setInitialSuburb] = useState(getAllSuburbs);

  const [suburbs, setSuburbs] = useState([]);
  //cacluate the distance when the state is changed
  useEffect(() => {
    let newList = recommd(state, initialSuburb);
    setSuburbs([]);
    setSuburbs(newList);
  }, [state]);

  return (
    <React.Fragment>
      <NavBar />
      <div className="recommender container">
        <div className="row">
          <div className="col s12 m5">
            <ParameterContext.Provider value={{ dispatch, state }}>
              <SidePanel data={state} />
            </ParameterContext.Provider>
            {/* <SidePanel health={health} handleChange={handleChange} /> */}
          </div>
          <div className="col s12 m5" style={{ marginTop: 50, marginLeft: 20 }}>
            {suburbs.length === 0 ? (
              "Nothing"
            ) : (
              <SuburbList suburbs={suburbs} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Recommender;
