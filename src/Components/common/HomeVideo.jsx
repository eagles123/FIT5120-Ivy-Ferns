import React, { Component } from "react";
import YouTube from "react-youtube";
import "../../css/videobg.css";

export default class HomeVideo extends Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    function _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.playVideo();
    }

    return (
      <div id="wrapper">
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="iBxYAjCUqvg"
              opts={opts}
              className="video-iframe"
              onReady={_onReady}
            />
          </div>
        </div>
      </div>
    );
  }
}
