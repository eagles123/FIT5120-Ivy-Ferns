import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function AniI({ img, handleOpen }) {
  const pulsing = keyframes`
    0% {transform: scale(1.1);}
    50% {transform: scale(0.9);}
     100% {transform: scale(1.1);}
   `;

  const Container = styled.span`
    height: 13px;
    position: relative;
    display: flex;
    align-items: center;
    // background-color: #eaeaea;
    padding: 40px 0px 50px 10px;
    img {
      fill: #b2b2b2;
      will-change: transform;
    }

    ${props =>
      true &&
      css`
        img {
          stroke: white;
          fill: white;
          animation: ${pulsing} 2s infinite;
        }
      `}
  `;

  return (
    <React.Fragment>
      <Container>
        <img
          src={img}
          alt=""
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        />
      </Container>
    </React.Fragment>
  );
}
