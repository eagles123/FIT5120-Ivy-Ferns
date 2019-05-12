import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import ReactDOM from "react-dom";
import $ from "jquery";
window.$ = $;

export default class MyVideo extends Component {
  render() {
    return (
      <div
        className="jarallax text parallax-3 col s12 m12"
        // data-jarallax-video="https://youtu.be/iBxYAjCUqvg"
        data-jarallax-video="mp4:./file.mp4"
      >
        <p style={{ marginBottom: "0px", fontSize: "45px" }}>
          Looking to move to
        </p>
        <p style={{ paddingTop: "0px", marginTop: "0px", fontSize: "40px" }}>
          Geelong, Ballarat or Bendigo?
        </p>
        <Link to="/recommend">
          <Fab
            variant="extended"
            aria-label="Add"
            color="primary"
            style={{
              height: "40px",
              width: "150px"
            }}
          >
            <span
              style={{
                fontSize: "15px",
                color: "white"
              }}
            >
              Get Started
            </span>
          </Fab>
        </Link>
        <h4
          style={{
            textAlign: "center",
            cursor: "pointer",
            marginTop: "20vh"
          }}
          onClick={this.props.handleScorll}
        >
          Know More{" "}
          <i
            className="fas fa-chevron-down fa-1x"
            onClick={this.props.handleScorll}
            style={{ cursor: "pointer" }}
          />
        </h4>
      </div>
    );
  }
}
