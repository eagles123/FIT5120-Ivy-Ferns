import posed from "react-pose";
import styled from "styled-components";
import { animated } from "react-spring";
export const AniBox = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.5)"
  },
  press: {
    scale: 1.12,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

export const Anidiv = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 150
  },
  closed: { x: "-150%", delay: 300 }
});

export const AniItem = posed.li({
  open: { y: 50, opacity: 1 },
  closed: { y: 10, opacity: 0 }
});

export const AniModal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 300 }
  }
});

export const AniShade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
`;
