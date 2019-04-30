import React, { useState, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import { ChoiceContext } from "../context/ParameterContext";

export default function Radiobut({ text }) {
  //temperare varibale to make raido not shown in the bigining
  const [temp, setTemp] = useState("0");
  const { choiceDispatch } = useContext(ChoiceContext);
  // function handleChoice() {
  //   if (value === "yes") {
  //     choiceDispatch({ type: text, payload: true });
  //     console.log(text);
  //   } else {
  //     choiceDispatch({ type: text, payload: false });
  //   }
  // }

  // function handleHealth(value) {
  //   choiceDispatch({ type: "HEALTHFIELD", payload: true });
  // }
  const [value, setValue] = useState("no");

  function handleYes() {
    choiceDispatch({ type: text, payload: true });
    setValue("yes");
    setTemp("1");
  }

  function handleNo() {
    choiceDispatch({ type: text, payload: false });
    setValue("no");
    setTemp("1");
  }

  return (
    <div className="row">
      <div className="col s4 m4">
        <Radio checked={value === "yes"} onClick={handleYes} color="primary" />
        <span>Yes</span>
      </div>
      <div className="col s4 m4">
        <Radio
          checked={value === "no" && temp === "1"}
          onClick={handleNo}
          color="primary"
        />
        <span>No</span>
      </div>
    </div>
  );
}
