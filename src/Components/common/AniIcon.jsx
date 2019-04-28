import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function AniIcon({ animate, submit, icon, x1, y1, x2, y2 }) {
  const move = keyframes`
  0% { 
    opacity: 1;
    transform: scale(0.5);
    transform: translate3d(0, 0, 0);
  }

  5% {
    opacity: 1;
    transform: scale(1.3);
  }

  50% {
    opacity: 0.7;
    transform: translate3d(${x1}, ${y1}, 0);
  }

  100% {
    opacity: 0;
    transform: scale(0);
    transform: translate3d(${x2}, ${y2}, 0);
  }
`;

  const pulsing = keyframes`
 0% {transform: scale(1);}
  25% {transform: scale(.97);}
  35% {transform: scale(.9);}
  45% {transform: scale(1.1);}
  55% {transform: scale(.9);}
  65% {transform: scale(1.1);}
  75% {transform: scale(1.03);}
  100% {transform: scale(1);}
`;

  const Container = styled.span`
    height: 13px;
    position: relative;
    display: flex;
    align-items: center;
    // background-color: #eaeaea;
    padding: 50px 10px 80px 10px;
    i {
      fill: #b2b2b2;
      will-change: transform;
    }

    ${props =>
      props.hearted &&
      css`
        i {
          stroke: white;
          fill: white;
          animation: ${pulsing} 1.5s infinite;
        }
      `}
  `;

  const Container2 = styled.span`
    height: 13px;
    position: relative;
    display: flex;
    align-items: center;
    // background-color: #eaeaea;
    padding: 50px 10px 80px 10px;
    cursor: pointer;
    i {
      fill: #b2b2b2;
      will-change: transform;
    }

    ${props =>
      props.hearted &&
      css`
        i {
          opacity: 0;
          animation: ${move} 1s ease-out forwards;
          animation-delay: 0s;
        }
      `};
  `;
  return (
    <React.Fragment>
      {submit ? (
        <Container2 hearted={animate}>
          <i className={icon} />
        </Container2>
      ) : (
        <Container hearted={animate}>
          <i className={icon} />
        </Container>
      )}
    </React.Fragment>
  );
}
