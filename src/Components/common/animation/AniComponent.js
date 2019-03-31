import posed from "react-pose";
export const AniBox = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.5)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

export const Anidiv = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 150
  },
  closed: { x: "-100%", delay: 300 }
});

export const AniItem = posed.li({
  open: { y: 50, opacity: 1 },
  closed: { y: 10, opacity: 0 }
});
