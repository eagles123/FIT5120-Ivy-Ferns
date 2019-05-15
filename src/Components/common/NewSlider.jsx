import React, { useState, useContext } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ParameterContext } from "./../context/ParameterContext";

function NewSlider(props) {
  // state = {
  //   value: 2
  // };
  const { scoreState } = useContext(ParameterContext);

  function getScore() {
    if (props.label === "HEALTH") return scoreState.healthScore;
    else if (props.label === "EDUCATION") return scoreState.educationScore;
    else return scoreState.propertyScore;
  }

  const [value, setValue] = useState(getScore());

  // handleChange = (event, value) => {
  //   this.props.stateDispatch({ type: this.props.label, payload: value });

  //   this.setState({ value });
  // };

  const handleChange = value => {
    props.stateDispatch({ type: props.label, payload: value });

    setValue(value);
  };

  return (
    <React.Fragment>
      <div className="col s12 m12">
        <Slider
          dots
          dotStyle={{ borderColor: "orange" }}
          activeDotStyle={{ borderColor: "yellow" }}
          value={value}
          min={2}
          max={10}
          step={2}
          onChange={handleChange}
          trackStyle={{ backgroundColor: "#388e3c", height: 5 }}
          handleStyle={{
            borderColor: "#1b5e20",
            height: 15,
            width: 15,
            backgroundColor: "#388e3c"
          }}
          railStyle={{ backgroundColor: "#ff5252", height: 5 }}
        />
      </div>
      <div className="row" style={{ marginTop: "35px", marginBottom: "50px" }}>
        <div className="col s2 m2">
          <p
            style={{
              height: 10,
              color: "black",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "0px",
              paddingTop: "0px",
              marginLeft: "0px",
              paddingLeft: "0px"
            }}
          >
            Less Important
          </p>
        </div>
        <div className="col s2 m2 offset-m8 offset-s8">
          <p
            style={{
              height: 10,
              color: "black",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "0px",
              paddingTop: "0px"
            }}
          >
            Very Important
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewSlider;
