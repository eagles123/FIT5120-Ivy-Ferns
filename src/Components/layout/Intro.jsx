// this component is not in use just keep it for my own record
import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
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
            // background: url("/dashbg.jpg"),
            backgroundColor: "white",
            opacity: 0.9,
            height: "100%",
            margin: "45px auto",
            boxShadow: "0 10px 12px 7px rgba(128, 128, 128, .3)"
          }}
        >
          <LightSpeed left duration={1000}>
            <h3 style={{ paddingTop: 5 }}>Set Your Preferences</h3>
            <div className="row">
              <div className="col s12 m5 offset-m1" style={{ paddingTop: 10 }}>
                <img className="responsive" src={"/carton3.1.png"} alt="" />
              </div>
              <div className="col s2 m1  introicon">
                <AniIcon
                  animate={choice.healthField}
                  submit={submit}
                  icon={"fas fa-hospital-symbol fa-3x"}
                  x1={"-10vw"}
                  x2={"-14vw"}
                  y1={"1vh"}
                  y2={"48vh"}
                />
                <AniIcon
                  animate={choice.educationField}
                  submit={submit}
                  icon={"fas fa-graduation-cap fa-3x"}
                  x1={"-10vw"}
                  x2={"-14vw"}
                  y1={"1vh"}
                  y2={"39vh"}
                />
                <AniIcon
                  animate={choice.propertyField}
                  submit={submit}
                  icon={"fas fa-home fa-3x"}
                  x1={"-11vw"}
                  x2={"-14vw"}
                  y1={"0vh"}
                  y2={"10vh"}
                />
                {/* <AniIcon
                  animate={choice.jobField}
                  submit={submit}
                  icon={"fas fa-briefcase fa-3x"}
                  x1={"-160px"}
                  x2={"-170px"}
                  y1={"5px"}
                  y2={"50px"}
                /> */}
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
                  header={"Health Care"}
                  state={hdialog}
                  handleClose={handleHclose}
                  content={
                    "Health Care includes information about the number of hospitals and number of General Practitioners in the particular Suburb."
                  }
                />
                <RadioBut text={"HEALTHFIELD"} />
                <br />
                <h6>
                  EDUCATIONAL INSTITUTIONS{" "}
                  <i
                    className="fas fa-info-circle"
                    onClick={handleEopen}
                    style={{ cursor: "pointer", color: "#2962ff" }}
                  />
                </h6>
                <MyDialog
                  header={"Education"}
                  state={edialog}
                  handleClose={handleEclose}
                  content={
                    "Educational Institutions include information about pre-primary schools, primary schools and secondary schools. Also, the ICSEA score for each of the schools, VCE study Score and number of enrolment."
                  }
                />
                <RadioBut text={"EDUCATIONFIELD"} />
                <br />
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
                  header={"House Price"}
                  content={
                    "Property prices include the median price range of properties located in the suburb."
                  }
                />
                <RadioBut text={"PROPERTYFIELD"} />
                <br />
                {/* <h6>
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
                <RadioBut text={"JOBFIELD"} /> */}

                <div style={{ margin: "40 auto" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    style={{
                      borderRadius: 20,
                      width: "200px",
                      height: "40px",
                      fontSize: 20
                    }}
                  >
                    <span style={{ color: "white" }}>Submit</span>
                  </Button>
                  {error ? (
                    <p
                      style={{
                        color: "red"
                      }}
                    >
                      *Please Select at least One Preference
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </LightSpeed>
        </div>
      </div>
    </React.Fragment>
  );
}
