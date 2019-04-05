import React, { useState, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import { ChoiceContext } from "../context/ParameterContext";

export default function Radiobut({ text }) {
  //temperare varibale to make raido not shown in the bigining
  const [temp, setTemp] = useState("0");
  const { choice, choiceDispatch } = useContext(ChoiceContext);
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
    setValue("yes");
    setTemp("1");
    choiceDispatch({ type: text, payload: true });
  }

  function handleNo() {
    setValue("no");
    setTemp("1");
    choiceDispatch({ type: text, payload: false });
  }

  return (
    <div className="row">
      <div className="col s3 m3">
        <Radio
          checked={value === "yes"}
          onClick={handleYes}
          style={{ color: "#fafafa" }}
        />
        <span>Yes</span>
      </div>
      <div className="col s3 m3">
        <Radio
          checked={value === "no" && temp === "1"}
          onClick={handleNo}
          style={{ color: "#fafafa" }}
        />
        <span>No</span>
      </div>
    </div>
  );
}
