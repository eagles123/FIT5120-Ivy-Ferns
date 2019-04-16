import React from "react";
import styled from "styled-components";

export default function Banner({ home, text }) {
  //change color here
  const BannerDiv = styled.div`
    box-sizing: border-box;
    text-align:center
    // background: #007bff;
    background: #ff5252;
    padding-top:20px;
    padding-left: 5px;
    position: relative;
    color: #fff;
    width: 60px;
    height: 90px;
    font: 600 16px sans-serif;
    color: #fff;
    z-index: 10;
    // &:after {
    //   content: "";
    //   position: absolute;
    //   left: 50%;
    //   bottom: -90px;
    //   border: 40px solid transparent;
    //   border-top: 50px solid #007bff
    //   //border-top: 50px solid red
    //   -webkit-transform: translate(-50%, 0);
    //   -ms-transform: translate(-50%, 0);
    //   transform: translate(-50%, 0);
    // }
  `;

  const BannerSpan = styled.span`

    font-family: Arial
    font-size: 15px;
    text-align: center
    position: relative;
    display: block;
    color: white
    z-index: 10;
    // -webkit-transform: rotate(-90deg);
    // -moz-transform: rotate(-90deg);
    // -o-transform: rotate(-90deg);
    // transform: rotate(-0deg);
  `;
  return (
    <React.Fragment>
      {/* {home ? "yes" : "no"} */}
      <BannerDiv>
        <BannerSpan>
          {home ? (
            <i
              className="fas fa-home fa-2x"
              style={{ marginTop: "0px", marginLeft: "0px", paddingTop: "0px" }}
            />
          ) : (
            <div>
              <br />
              {text}
            </div>
          )}
        </BannerSpan>
      </BannerDiv>
    </React.Fragment>
  );
}
