import React, { useState, useReducer, useEffect, useContext } from "react";
import SidePanel from "../layout/SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { ParameterContext, parameterReducr } from "../context/ParameterContext";
import { getAllSuburbs } from "./../services/fakeSuburbList";
import { distance, recommd } from "./../services/recommend";

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
      healthScore: 0,
      educationScore: 0,
      propertyType: "buy",
      propertyScore: 0,
      jobScore: 0
    }
  );
  const [initialSuburb, setInitialSuburb] = useState(getAllSuburbs);

  const [suburbs, setSuburbs] = useState([]);
  console.log(suburbs);
  //cacluate the distance when the state is changed
  useEffect(() => {
    let newList = recommd(state, initialSuburb);
    setSuburbs(newList);
  }, [state]);

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
