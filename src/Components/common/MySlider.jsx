import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const style = { width: 600, margin: 50 };
function log(value) {
  console.log(value); //eslint-disable-line
}
export default class MySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  onSliderChange = value => {
    this.props.stateDispatch({ type: this.props.label, payload: value });
    this.setState({
      value
    });
  };
  render() {
    return (
      <Slider
        value={this.state.value}
        min={1}
        max={10}
        onChange={this.onSliderChange}
        trackStyle={{ backgroundColor: "blue", height: 10 }}
        handleStyle={{
          borderColor: "blue",
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: "black"
        }}
        railStyle={{ backgroundColor: "red", height: 10 }}
      />
    );
  }
}
