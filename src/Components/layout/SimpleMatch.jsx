import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import QuestionModal from "../common/QuestionModal";
import NavBar from "./NavBar";
import { Anidiv, AniItem } from "../common/animation/AniComponent";

export default function SimpleMatch() {
  const [marriage, setMarriage] = useState("");
  const [child, setChild] = useState("");
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  function handleMChange(event) {
    setMarriage(event.target.value);
  }

  function handleCChange(event) {
    setChild(event.target.value);
  }
  useEffect(() => {
    setTimeout(toggle, 600);
  }, []);
  function toggle() {
    setAnimate(true);
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Anidiv className=" center" pose={animate ? "open" : "closed"}>
          <AniItem className="item">
            <h5>Item 1</h5>
          </AniItem>
          <AniItem className="item">
            <h5>Item 2</h5>
          </AniItem>
          <AniItem className="item">
            <h5>Item 3</h5>
          </AniItem>
          <AniItem className="item">
            <h5>Item 4</h5>
          </AniItem>
        </Anidiv>
      </div>
      <QuestionModal
        open={open}
        marriage={marriage}
        child={child}
        handleCChange={handleCChange}
        handleMChange={handleMChange}
      />
    </React.Fragment>
  );
}
