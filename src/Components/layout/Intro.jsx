import React, { useState, useEffect, useContext } from "react";
import CustomButton from "../common/CustomButtons";
import { ChoiceContext } from "../context/ParameterContext";
import NavBar from "./NavBar";
import "../../chosePage.css";
import { LightSpeed } from "react-reveal";
import RadioBut from "../common/RadioBut";

export default function Intro(props) {
  const { choiceDispatch } = useContext(ChoiceContext);
  //manage local state for radio button

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

  function handleNext() {
    props.history.push("/recommend");
  }

  return (
    <React.Fragment>
      <NavBar home={true} about={true} faqs={true} />

      <div className="cpage">
        <div
          className="container"
          style={{
            width: "1000px",
            backgroundColor: "#ff5252",
            // backgroundColor: "white",
            opacity: 0.9,
            maxHeight: "720px",
            margin: "70px auto"
          }}
        >
          <LightSpeed left duration={1000}>
            <h3 style={{ paddingTop: 5 }}>SET YOUR PREFERENCES</h3>
            <div className="row">
              <div className="col s4 m4">
                <img src={"/carton3.png"} alt="" />
              </div>
              <div
                className="col s1 m1 offset-m1 introicon"
                style={{ color: "white" }}
              >
                <i className="fas fa-hospital-symbol fa-3x" />
                <i className="fas fa-graduation-cap fa-3x" />
                <i className="fas fa-building fa-3x" />
                <i className="fas fa-briefcase fa-3x" />
              </div>
              <div className="col s7 m5 ">
                {/* <FormControl component="fieldset"> */}
                <h5>HEALTH CARE</h5>

                <RadioBut text={"HEALTHFIELD"} />
                <h5>EDUCATIONAL INSTITUTIONS</h5>

                <RadioBut text={"EDUCATIONFIELD"} />
                <h5>PROPERTY PRICES</h5>

                <RadioBut text={"PROPERTYFIELD"} />
                <h5>JOB OPPORTUNITIES</h5>

                <RadioBut text={"JOBFIELD"} />
              </div>
              <div style={{ marginLeft: "500px" }}>
                <CustomButton
                  text={"Submit"}
                  color={"#3f51b5"}
                  handleChange={handleNext}
                />
              </div>
            </div>
            {/* <div id="choose" />
        <h4 style={{ padding: 300, color: "white", zIndex: 5 }}>
          SET YOUR PREFERENCES
        </h4> */}
            {/* <CustomButton
            text={"Health"}
            color={"green"}
            handleChange={handleHealth}
          />
          {choice.healthField ? "true" : "false"}

          <CustomButton
            text={"Education"}
            color={"blue"}
            handleChange={handleEdu}
          />
          {choice.educationField ? "true" : "false"}

          <CustomButton
            text={"Property"}
            color={"purple"}
            handleChange={handleProp}
          />
          {choice.propertyField ? "true" : "false"}

          <CustomButton text={"Job"} color={"red"} handleChange={handleJob} />
          {choice.jobField ? "true" : "false"}

          <div style={{ marginTop: 200 }}>
            <CustomButton
              text={"Next"}
              color={"black"}
              handleChange={handleNext}
            />
          </div> */}
          </LightSpeed>
        </div>
      </div>
    </React.Fragment>
  );
}
