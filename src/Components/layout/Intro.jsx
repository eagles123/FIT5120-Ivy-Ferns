import React, { useState, useEffect, useContext, useReducer } from "react";
import CustomButton from "../common/CustomButtons";
import { ChoiceContext } from "../context/ParameterContext";
import { LightSpeed } from "react-reveal";
import RadioBut from "../common/RadioBut";
import AniIcon from "../common/AniIcon";
import MyDialog from "../common/Dialog";

export default function Intro(props) {
  const { choice, choiceDispatch } = useContext(ChoiceContext);
  const [submit, setSubmit] = useState(false);
  const [hdialog, setH] = useState(false);
  const [edialog, setE] = useState(false);
  const [pdialog, setP] = useState(false);
  const [jdialog, setJ] = useState(false);
  const [error, setError] = useState(false);

  function handleHopen() {
    setH(true);
  }
  function handleEopen() {
    setE(true);
  }
  function handlePopen() {
    setP(true);
  }
  function handleJopen() {
    setJ(true);
  }

  function handleHclose() {
    setH(false);
  }
  function handleEclose() {
    setE(false);
  }
  function handlePclose() {
    setP(false);
  }
  function handleJclose() {
    setJ(false);
  }

  useEffect(() => {
    resetChoice();
  }, []);

  function resetChoice() {
    choiceDispatch({ type: "RESET" });
  }
  //set animation start time
  function handleNext() {
    if (
      choice.healthField ||
      choice.educationField ||
      choice.propertyField ||
      choice.jobField
    ) {
      setError(false);
      setSubmit(true);
      setTimeout(() => {
        props.history.push("/recommend");
      }, 700);
    } else setError(true);
  }

  // function handleInfo(info) {
  //   dispatch({type: info, payload: !dialogState.info})
  // }

  return (
    <React.Fragment>
      <div className="cpage">
        <div
          className="container"
          style={{
            width: "70%",
            backgroundColor: "white",
            // backgroundColor: "white",
            opacity: 0.9,
            height: "100%",
            margin: "45px auto"
          }}
        >
          <LightSpeed left duration={1000}>
            <h3 style={{ paddingTop: 5 }}>SET YOUR PREFERENCES</h3>
            <div className="row">
              <div className="col s12 m5 offset-m1">
                <img className="responsive" src={"/carton3.1.png"} alt="" />
              </div>
              <div className="col s2 m1  introicon" style={{ color: "white" }}>
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
              <div className="col s8 m5 ">
                {/* <FormControl component="fieldset"> */}
                <h6>
                  HEALTH CARE{" "}
                  <i
                    className="fas fa-info-circle"
                    onClick={handleHopen}
                    style={{ cursor: "pointer", color: "#2962ff" }}
                  />
                </h6>
                <MyDialog
                  state={hdialog}
                  handleClose={handleHclose}
                  content={
                    "Health Care includes information about the number of hospitals and number of General Practitioners in the particular Suburb."
                  }
                />
                <RadioBut text={"HEALTHFIELD"} />

                <h6>
                  EDUCATIONAL INSTITUTIONS{" "}
                  <i
                    className="fas fa-info-circle"
                    onClick={handleEopen}
                    style={{ cursor: "pointer", color: "#2962ff" }}
                  />
                </h6>
                <MyDialog
                  state={edialog}
                  handleClose={handleEclose}
                  content={
                    "Educational Institutions include information about pre-primary schools, primary schools and secondary schools. Also, the ICSEA score for each of the schools, number of enrolment and the teacher to student staff ratio is also included."
                  }
                />
                <RadioBut text={"EDUCATIONFIELD"} />

                <h6>
                  PROPERTY PRICES{" "}
                  <i
                    className="fas fa-info-circle"
                    onClick={handlePopen}
                    style={{ cursor: "pointer", color: "#2962ff" }}
                  />
                </h6>
                <MyDialog
                  state={pdialog}
                  handleClose={handlePclose}
                  content={
                    "Property prices include the median price range of properties located in the suburb."
                  }
                />
                <RadioBut text={"PROPERTYFIELD"} />

                <h6>
                  JOB OPPORTUNITIES{" "}
                  <i
                    className="fas fa-info-circle"
                    onClick={handleJopen}
                    style={{ cursor: "pointer", color: "#2962ff" }}
                  />
                </h6>
                <MyDialog
                  state={jdialog}
                  handleClose={handleJclose}
                  content={
                    "Job opportunities include information about the industries and the number of employees employed in that industry."
                  }
                />
                <RadioBut text={"JOBFIELD"} />
              </div>
              <div style={{ margin: "30 auto" }}>
                <CustomButton
                  text={"Submit"}
                  color={"#3f51b5"}
                  handleChange={handleNext}
                />
              </div>
              {error ? (
                <p style={{ margin: "0 auto", color: "red" }}>
                  *Please Select at least on field
                </p>
              ) : null}
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
