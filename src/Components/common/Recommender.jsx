import React, { useState, useReducer, useEffect, useContext } from "react";
import SidePanel from "../layout/SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { ParameterContext, parameterReducr } from "../context/ParameterContext";
import { getAllSuburbs } from "./../services/fakeSuburbList";

const Recommender = () => {
  const [suburbs, setSuburbs] = useState([]);
  // const [state, dispatch] = useReducer(parameterReducr, []);

  //read in the data when compomentDidMount
  useEffect(() => {
    setSuburbs(getAllSuburbs);
  }, []);

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
      healthScore: 0,
      educationScore: 0,
      propertyType: "buy",
      propertyScore: 0,
      jobScore: 0
    }
  );
  //cacluate the distance when the state is changed
  // useEffect(() => {
  //   return null;
  // }, state);

  return (
    <div className="recommender container">
      <div className="row">
        <div className="col s12 m5">
          <ParameterContext.Provider value={{ dispatch, state }}>
            <SidePanel data={state} />
          </ParameterContext.Provider>
          {/* <SidePanel health={health} handleChange={handleChange} /> */}
        </div>
        <div className="col s12 m5" style={{ marginTop: 50, marginLeft: 20 }}>
          <SuburbList suburbs={suburbs} />
        </div>
      </div>
    </div>
  );
};
export default Recommender;
