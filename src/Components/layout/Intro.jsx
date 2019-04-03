import React, { useState, useEffect, useContext } from "react";
import { Anidiv, AniItem } from "../common/animation/AniComponent";
import CustomButton from "../common/CustomButtons";
import { ChoiceContext } from "../context/ParameterContext";

export default function Intro(props) {
  const { choice, choiceDispatch } = useContext(ChoiceContext);
  // const [healthBtn, setHealth] = useState(false);
  // const [educationBtn, setEducation] = useState(false);
  // const [propBtn, setProp] = useState(false);
  // const [jobBtn, setJob] = useState(false);
  //set animation
  const [animate, setAnimate] = useState(false);
  function resetChoice() {
    choiceDispatch({ type: "RESET" });
  }
  //set animation start time
  useEffect(() => {
    resetChoice();
    setTimeout(toggle, 600);
  }, []);
  function toggle() {
    setAnimate(true);
  }

  function handleHealth() {
    choiceDispatch({ type: "HEALTHFIELD", payload: !choice.healthField });
  }

  function handleEdu() {
    choiceDispatch({ type: "EDUCATIONFIELD", payload: !choice.educationField });
  }
  function handleProp() {
    choiceDispatch({ type: "PROPERTYFIELD", payload: !choice.propertyField });
  }
  function handleJob() {
    choiceDispatch({ type: "JOBFIELD", payload: !choice.jobField });
  }

  function handleNext() {
    props.history.push("/recommend");
  }

  return (
    <React.Fragment>
      <div className="container">
        <Anidiv className=" center" pose={animate ? "open" : "closed"}>
          <AniItem className="item">
            <CustomButton
              text={"Health"}
              color={"green"}
              handleChange={handleHealth}
            />
            {choice.healthField ? "true" : "false"}
          </AniItem>
          <AniItem className="item">
            <CustomButton
              text={"Education"}
              color={"blue"}
              handleChange={handleEdu}
            />
            {choice.educationField ? "true" : "false"}
          </AniItem>
          <AniItem className="item">
            <CustomButton
              text={"Property"}
              color={"purple"}
              handleChange={handleProp}
            />
            {choice.propertyField ? "true" : "false"}
          </AniItem>
          <AniItem className="item">
            <CustomButton text={"Job"} color={"red"} handleChange={handleJob} />
            {choice.jobField ? "true" : "false"}
          </AniItem>
          <div style={{ marginTop: 200 }}>
            <Anidiv className="next">
              <CustomButton
                text={"Next"}
                color={"black"}
                handleChange={handleNext}
              />
            </Anidiv>
          </div>
        </Anidiv>
      </div>
    </React.Fragment>
  );
}
