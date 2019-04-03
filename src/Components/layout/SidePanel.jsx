import React, { useContext } from "react";
import { ChoiceContext } from "../context/ParameterContext";
import SliderElement from "../common/SliderElement";
import { AniItem } from "../common/animation/AniComponent";

const SidePanel = ({ data }) => {
  const { choice } = useContext(ChoiceContext);
  function renderText(data) {
    if (data >= 0 && data <= 2) return "Not at all";
    else if (data > 2 && data <= 4) return "Low";
    else if (data > 4 && data <= 6) return "Medium";
    else if (data > 6 && data <= 8) return "High";
    else if (data > 8 && data <= 11) return "Extremly High";
  }
  return (
    <React.Fragment>
      <h5 style={{ paddingTop: 50 }}>How much do you care about:</h5>
      <div style={{ margin: 50 }}>
        {choice.healthField ? (
          <AniItem className="anislider">
            <SliderElement
              key={String(choice.healthField)}
              text={renderText(data.healthScore)}
              title={"Health"}
              lable={"HEALTH"}
            />
          </AniItem>
        ) : null}
        {choice.educationField ? (
          <AniItem className="anislider">
            <SliderElement
              text={renderText(data.educationScore)}
              title={"Education"}
              lable={"EDUCATION"}
            />
          </AniItem>
        ) : null}

        {choice.propertyField ? (
          <AniItem className="anislider">
            <SliderElement
              text={renderText(data.propertyScore)}
              title={"Property"}
              lable={"PROPERTY"}
            />
          </AniItem>
        ) : null}

        {choice.jobField ? (
          <AniItem className="anislider">
            <SliderElement
              text={renderText(data.jobScore)}
              title={"Employment"}
              lable={"JOB"}
            />
          </AniItem>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default SidePanel;
