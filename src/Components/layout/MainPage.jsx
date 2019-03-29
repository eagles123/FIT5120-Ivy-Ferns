import React, { Component } from "react";
import Video from "../common/Video";
import OddRow from "./../common/OddRow";
import EvenRow from "./../common/EvenRow";
import WhenInView from "./../common/WhenInView";
import styled, { css } from "styled-components";
import { Waypoint } from "react-waypoint";

const RevealP = styled.p`
  position: relative;
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 5s;
  }
  ${({ hide }) =>
    hide &&
    css`
      &:after {
        transform: rotateY(0deg);
      }
    `}
`;

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseOver = () => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  onEnter = () => {
    console.log("ender");
  };

  _renderMessage() {
    if (!this.state.message) {
      return;
    }
  }

  render() {
    const { hover } = this.state;

    return (
      <div>
        <Video videoUrl={require("../../assets/MyVideo.mp4")} />

        <OddRow
          headline="Regional Victorial"
          quote="Maybe it’s been coming on for years, or maybe it’s a recent thing. Either way, if you’ve been thinking about a move to regional Victoria, you’ve come to the right place. Whether you’re ready for a fresh start, or ready to return to your roots, this is the ideal spot to get ready for your adventure and explore all the exciting possibilities of your dream. It might be next week, or it may be next year. Whenever you make the move, you can be sure that Regional Victoria is ready when you are."
          imgSrc={require("../../assets/ballarat.png")}
        />

        {/* <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              Negative values of the offset prop could be useful for lazy
              loading. Imagine if you had a lot of large images on a long page,
              but you didn't want to load them all at once. You can use React
              Waypoint to receive a callback whenever an image is a certain
              distance from the bottom of the page. For instance, by specifying
              bottomOffset='-200px', then your onEnter callback would be called
              when the waypoint comes closer than 200 pixels from the bottom
              edge of the page. By placing a waypoint near each image, you could
              dynamically load them. There are likely many more use cases for
              the offsets: be creative! Also, keep in mind that there are two
              boundaries, so there are always two positions when the onLeave and
              onEnter callback will be called. By using the arguments passed to
              the callbacks, you can determine whether the waypoint has crossed
              the top boundary or the bottom boundary.
            </RevealP>
          )}
        </WhenInView>
        <Waypoint onEnter={this.onEnter()}>
          <div hide={true}>
            <p>jejehnrjejdj</p>
          </div>
        </Waypoint> */}

        <Waypoint onEnter={this.onEnter}>
          <div>
            <OddRow
              headline="Regional Victorial"
              quote="Maybe it’s been coming on for years, or maybe it’s a recent thing. Either way, if you’ve been thinking about a move to regional Victoria, you’ve come to the right place. Whether you’re ready for a fresh start, or ready to return to your roots, this is the ideal spot to get ready for your adventure and explore all the exciting possibilities of your dream. It might be next week, or it may be next year. Whenever you make the move, you can be sure that Regional Victoria is ready when you are."
              imgSrc={require("../../assets/ballarat.png")}
            />
          </div>
        </Waypoint>
      </div>
    );
  }
}
