import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";

const styles = {
  root: {
    width: 450
  },
  slider: {
    padding: "22px 0px"
  }
};

class StepSlider extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.props.stateDispatch({ type: this.props.label, payload: value });

    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <div className="col s12 m12">
          <Slider
            classes={{ container: classes.slider }}
            value={value}
            min={0}
            max={10}
            step={1}
            onChange={this.handleChange}
          />
        </div>
        <div className="row" style={{ marginBottom: "50px" }}>
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

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StepSlider);
