import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class NewSlider extends React.Component {
  state = {
    value: 2
  };

  // handleChange = (event, value) => {
  //   this.props.stateDispatch({ type: this.props.label, payload: value });

  //   this.setState({ value });
  // };

  handleChange = value => {
    this.props.stateDispatch({ type: this.props.label, payload: value });

    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="col s12 m12">
          {/* <Slider
            classes={{ container: classes.slider }}
            value={value}
            min={1}
            max={10}
            step={1}
            onChange={this.handleChange}
          /> */}
          <Slider
            dots
            dotStyle={{ borderColor: "orange" }}
            activeDotStyle={{ borderColor: "yellow" }}
            value={this.state.value}
            min={2}
            max={10}
            step={2}
            onChange={this.handleChange}
            trackStyle={{ backgroundColor: "#00acc1", height: 5 }}
            handleStyle={{
              borderColor: "ff5252",
              height: 15,
              width: 15,
              backgroundColor: "#00acc1"
            }}
            railStyle={{ backgroundColor: "#ff5252", height: 5 }}
          />
        </div>
        <div
          className="row"
          style={{ marginTop: "35px", marginBottom: "50px" }}
        >
          <div className="col s2 m2">
            <p
              style={{
                height: 10,
                color: "black",
                fontSize: "13px",
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
          <div className="col s2 m2 offset-m3">
            <p
              style={{
                height: 10,
                color: "black",
                fontSize: "13px",
                textAlign: "center",
                marginTop: "0px",
                paddingTop: "0px"
              }}
            >
              Netural
            </p>
          </div>
          <div className="col s2 m2 offset-m3">
            <p
              style={{
                height: 10,
                color: "black",
                fontSize: "13px",
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
}

export default NewSlider;
