import React from "react";
import styled from "styled-components";

export default function ImageBox({ quote, image }) {
  const ImageBox = styled.div`
    position: relative;
  `;
  const TextBox = styled.div`
  text-align: left
    position: absolute;
    height:100px
    width:460px
    bottom: 5px;
    background-color: white;
    opacity: 0.6;
  `;

  return (
    <ImageBox>
      <img src={image} />
      <TextBox>
        <h4>Reginal Victoria</h4>
        <span>{quote}</span>
      </TextBox>
    </ImageBox>
  );
}
