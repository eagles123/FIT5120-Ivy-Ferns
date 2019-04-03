import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Banner({ link, text }) {
  //change color here
  const BannerDiv = styled.div`
    box-sizing: border-box;
    text-align:center
    background: #007bff;
    // background: red
    padding: 20px;
    position: relative;
    color: #fff;
    width: 80px;
    height: 80px;
    font: 600 16px sans-serif;
    color: #fff;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -90px;
      border: 40px solid transparent;
      border-top: 50px solid #007bff
      //border-top: 50px solid red
      -webkit-transform: translate(-50%, 0);
      -ms-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
  `;

  const BannerSpan = styled.span`
    padding: 30px 0 30px;
    position: relative;
    display: block;
    z-index: 1;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-0deg);
  `;
  return (
    <Link to={link}>
      <BannerDiv>
        <BannerSpan>{text}</BannerSpan>
      </BannerDiv>
    </Link>
  );
}
