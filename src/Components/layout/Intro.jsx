import React, { useState, useEffect, useContext } from "react";
import CustomButton from "../common/CustomButtons";
import { ChoiceContext } from "../context/ParameterContext";
import NavBar from "./NavBar";
import "../../chosePage.css";
import { LightSpeed } from "react-reveal";
import RadioBut from "../common/RadioBut";
import AniIcon from "../common/AniIcon";

export default function Intro(props) {
  const { choice, choiceDispatch } = useContext(ChoiceContext);

  //manage local state for radio button

  // const [healthCounter, setHealth] = useState(0);
  // const [educationCounter, setEducation] = useState(0);
  // const [propCounter, setProp] = useState(0);
  // const [jobCounter, setJob] = useState(0);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    resetChoice();
  }, []);

  //set animation
  // function handleIcon(lable, flag) {
  //   if (flag === "yes") {
  //     if (lable === "HEALTHFIELD") {
  //       setHealth(healthCounter + 1);
  //       if (choice.educationField === true) setEducation(educationCounter + 1);
  //       if (choice.propertyField === true) setProp(propCounter + 1);
  //       if (choice.jobField === true) setJob(jobCounter + 1);
  //     } else if (lable === "EDUCATIONFIELD") {
  //       setEducation(educationCounter + 1);
  //       if (choice.healthField === true) setHealth(healthCounter + 1);
  //       if (choice.propertyField === true) setProp(propCounter + 1);
  //       if (choice.jobField === true) setJob(jobCounter + 1);
  //     } else if (lable === "PROPERTYFIELD") {
  //       setProp(propCounter + 1);
  //       if (choice.educationField === true) setEducation(educationCounter + 1);
  //       if (choice.healthField === true) setHealth(healthCounter + 1);
  //       if (choice.jobField === true) setJob(jobCounter + 1);
  //     } else if (lable === "JOBFIELD") {
  //       setJob(jobCounter + 1);
  //       if (choice.educationField === true) setEducation(educationCounter + 1);
  //       if (choice.propertyField === true) setProp(propCounter + 1);
  //       if (choice.healthField === true) setHealth(healthCounter + 1);
  //     }
  //   } else if (flag === "no") {
  //     if (lable === "HEALTHFIELD") {
  //       setHealth(0);
  //       if (choice.educationField === true) setEducation(educationCounter + 1);
  //       if (choice.propertyField === true) setProp(propCounter + 1);
  //       if (choice.jobField === true) setJob(jobCounter + 1);
  //     } else if (lable === "EDUCATIONFIELD") {
  //       setEducation(0);
  //       if (choice.healthField === true) setHealth(healthCounter + 1);
  //       if (choice.propertyField === true) setProp(propCounter + 1);
  //       if (choice.jobField === true) setJob(jobCounter + 1);
  //     } else if (lable === "PROPERTYFIELD") {
  //       setProp(0);
  //       if (choice.educationField === true) setEducation(educationCounter + 1);
  //       if (choice.healthField === true) setHealth(healthCounter + 1);
  //       if (choice.jobField === true) setJob(jobCounter + 1);
  //     } else if (lable === "JOBFIELD") {
  //       setJob(0);
  //       if (choice.educationField === true) setEducation(educationCounter + 1);
  //       if (choice.propertyField === true) setProp(propCounter + 1);
  //       if (choice.healthField === true) setHealth(healthCounter + 1);
  //     }
  //   }
  // }

  function resetChoice() {
    choiceDispatch({ type: "RESET" });
  }
  //set animation start time
  function handleNext() {
    setSubmit(true);
    setTimeout(() => {
      props.history.push("/recommend");
    }, 700);
  }

  return (
    <React.Fragment>
      <div className="cpage">
        <div
          className="container"
          style={{
            width: "900px",
            backgroundColor: "white",
            // backgroundColor: "white",
            opacity: 0.9,
            maxHeight: "550px",
            margin: "45px auto"
          }}
        >
          <LightSpeed left duration={1000}>
            <h3 style={{ paddingTop: 5 }}>SET YOUR PREFERENCES</h3>
            <div className="row">
              <div className="col s4 m4 offset-m1">
                <img src={"/carton3.png"} alt="" />
              </div>
              <div className="col s1 m1 introicon" style={{ color: "white" }}>
                <AniIcon
                  animate={choice.healthField}
                  submit={submit}
                  icon={"fas fa-hospital-symbol fa-3x"}
                  x1={"-100px"}
                  x2={"-170px"}
                  y1={"10px"}
                  y2={"380px"}
                />
                <AniIcon
                  animate={choice.educationField}
                  submit={submit}
                  icon={"fas fa-graduation-cap fa-3x"}
                  x1={"-100px"}
                  x2={"-170px"}
                  y1={"10px"}
                  y2={"250px"}
                />
                <AniIcon
                  animate={choice.propertyField}
                  submit={submit}
                  icon={"fas fa-building fa-3x"}
                  x1={"-120px"}
                  x2={"-170px"}
                  y1={"7px"}
                  y2={"140px"}
                />
                <AniIcon
                  animate={choice.jobField}
                  submit={submit}
                  icon={"fas fa-briefcase fa-3x"}
                  x1={"-160px"}
                  x2={"-170px"}
                  y1={"5px"}
                  y2={"50px"}
                />
                {/* <i className="fas fa-hospital-symbol fa-3x" /> */}
                {/* <i className="fas fa-graduation-cap fa-3x" />
                <i className="fas fa-building fa-3x" />
                <i className="fas fa-briefcase fa-3x" /> */}
              </div>
              <div className="col s7 m5 ">
                {/* <FormControl component="fieldset"> */}
                <h6>HEALTH CARE</h6>
                <RadioBut text={"HEALTHFIELD"} />

                <h6>EDUCATIONAL INSTITUTIONS</h6>
                <RadioBut text={"EDUCATIONFIELD"} />

                <h6>PROPERTY PRICES</h6>
                <RadioBut text={"PROPERTYFIELD"} />

                <h6>JOB OPPORTUNITIES</h6>
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
