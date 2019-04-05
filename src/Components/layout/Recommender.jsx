import React, { useState, useReducer, useEffect, useContext } from "react";
import SidePanel from "./SidePanel";
import SuburbList from "../Suburbs/SuburbList";
import { Anidiv } from "../common/animation/AniComponent";
import { ParameterContext, ChoiceContext } from "../context/ParameterContext";
import { getAllSuburbs } from "../services/fakeSuburbList";
import { recommd } from "../services/recommend";
import { recReducer } from "./../reducer/recReducer";
import ToggleButtons from "../common/ToggleButtons";
import CheckList from "./../common/CheckList";
import NavBar from "./NavBar";

const Recommender = () => {
  const { choice, choiceDispatch } = useContext(ChoiceContext);
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   setTimeout(toggle, 600);
  // }, []);
  // function toggle() {
  //   setAnimate(true);
  // }

  //dispatch actions to show sliders at Recommder
  function choseHealth() {
    choiceDispatch({ type: "HEALTHFIELD", payload: !choice.healthField });
    stateDispatch({ type: "RESETHEALTH" });
  }

  function choseEdu() {
    choiceDispatch({ type: "EDUCATIONFIELD", payload: !choice.educationField });
    stateDispatch({ type: "RESETEDU" });
  }
  function choseProp() {
    choiceDispatch({ type: "PROPERTYFIELD", payload: !choice.propertyField });
    stateDispatch({ type: "RESETPROP" });
  }
  function choseJob() {
    choiceDispatch({ type: "JOBFIELD", payload: !choice.jobField });
    stateDispatch({ type: "RESETJOB" });
  }
  //read in the data when compomentDidMount
  // useEffect(() => {
  //   getAllSuburbs;
  // }, []);

  //actions pass to CheckList component
  const choices = [
    { label: "Health", chose: choice.healthField, action: choseHealth },
    { label: "Education", chose: choice.educationField, action: choseEdu },
    { label: "Property", chose: choice.propertyField, action: choseProp },
    { label: "Empolyment", chose: choice.jobField, action: choseJob }
  ];
  //state and reducer to maniplate the user input slider value
  const [state, stateDispatch] = useReducer(recReducer, {
    healthScore: 0,
    educationScore: 0,
    propertyType: "buy",
    propertyScore: 0,
    jobScore: 0
  });
  const [initialSuburb, setInitialSuburb] = useState(1);

  const [suburbs, setSuburbs] = useState(getAllSuburbs);
  //cacluate the distance when the state is changed

  useEffect(() => {
    setSuburbs(recommd(state, suburbs));
    //don't understand this code but add this line suburb list will update immidiately
    setInitialSuburb(initialSuburb);
    // let newList = recommd(state, initialSuburb);

    // setSuburbs(newList);
  }, [state]);

  return (
    <React.Fragment>
      <NavBar home={true} about={true} faqs={true} />
      <div className="recommender container-fluid">
        <div className="container">{/* <ToggleButtons /> */}</div>
        <div className="row">
          <div className="col s12 m2" style={{ marginTop: 100 }}>
            <CheckList choices={choices} />
          </div>
          <div className="col s12 m4 offset-m1 ">
            <ParameterContext.Provider value={{ stateDispatch, state }}>
              <SidePanel data={state} />
            </ParameterContext.Provider>
          </div>
          <div className="col s12 m4" style={{ marginTop: 50, marginLeft: 20 }}>
            {suburbs.length === 0 ? null : <SuburbList suburbs={suburbs} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Recommender;
