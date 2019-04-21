import posed from "react-pose";

export const AniUl = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 120
  },
  closed: { delay: 0 }
});

export const AniItem = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export const DashItem = posed.li({
  open: { scale: 1, opacity: 1 },
  closed: { scale: 0, opacity: 0 }
});

export const AniBox = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
