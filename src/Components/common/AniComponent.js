import posed from "react-pose";

export const Anidiv = posed.ul({
  open: {
    x: "0%",
    delayChildren: 150,
    staggerChildren: 130
  },
  closed: { x: "-150%", delay: 350 }
});

export const AniItem = posed.li({
  open: { y: 0, x: 30, opacity: 1 },
  closed: { y: 10, opacity: 0 }
});

export const AniBox = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
