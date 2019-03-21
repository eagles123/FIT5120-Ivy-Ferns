import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import MySlider from "./../common/MySlider";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const SidePanel = props => {
  const fontStyle = {
    fontSize: 20,
    fontFamily: "Comic Sans MS"
  };
  function renderText(data) {
    if (data >= 0 && data <= 2) return "Very Low";
    else if (data > 2 && data <= 4) return "Low";
    else if (data > 4 && data <= 6) return "Medium";
    else if (data > 6 && data <= 8) return "High";
    else if (data > 8 && data <= 11) return "Extremly High";
  }
  return (
    <React.Fragment>
      <h5 style={{ paddingTop: 50 }}>How much do you care about:</h5>
      <div style={{ margin: 50 }}>
        <h5>Health</h5>
        <span style={fontStyle}>{renderText(props.data.healthScore)}</span>
        <MySlider lable={"HEALTH"} />
        <h5>Education</h5>
        <span style={fontStyle}>{renderText(props.data.educationScore)}</span>
        <MySlider lable={"EDUCATION"} />
        <h5>Property</h5>
        <span style={fontStyle}>{renderText(props.data.propertyScore)}</span>
        <ToggleButtonGroup exclusive={true}>
          <ToggleButton value="Buy">Buy</ToggleButton>
          <ToggleButton value="Rent">Rent</ToggleButton>
        </ToggleButtonGroup>
        <MySlider lable={"PROPERTY"} />
        <h5>Jobs</h5>
        <span style={fontStyle}>{renderText(props.data.jobScore)}</span>
        <MySlider lable={"JOB"} />
      </div>
    </React.Fragment>
  );
};

export default SidePanel;
