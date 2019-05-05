import React, { useContext } from "react";
import { ChoiceContext } from "../context/ParameterContext";
import SliderElement from "../common/SliderElement";

const SidePanel = () => {
  const { choice } = useContext(ChoiceContext);
  // function renderText(data) {
  //   if (data >= 0 && data <= 2) return "Not at all";
  //   else if (data > 2 && data <= 4) return "Low";
  //   else if (data > 4 && data <= 6) return "Medium";
  //   else if (data > 6 && data <= 8) return "High";
  //   else if (data > 8 && data <= 11) return "Extremly High";
  // }
  return (
    <React.Fragment>
      <div style={{ margin: 50 }}>
        {choice.healthField ? (
          <SliderElement
            key={String(choice.healthField)}
            // text={renderText(data.healthScore)}
            title={"Health Care"}
            label={"HEALTH"}
            text={
              "How much do you care about having a hospital and/or a General Practitioner (G.P.) near you? "
            }
            info={
              "Health Care includes information about the number of hospitals and number of General Practitioners in the particular Suburb."
            }
          />
        ) : null}

        {choice.educationField ? (
          <SliderElement
            // text={renderText(data.educationScore)}
            title={"Education"}
            label={"EDUCATION"}
            text={
              "How important is it for you to have an educational institution nearby?"
            }
            info={
              "Educational Institutions include information about pre-primary schools, primary schools and secondary schools. Also, the ICSEA score for each of the schools, VCE study Score and number of enrolment."
            }
          />
        ) : null}

        {choice.propertyField ? (
          <SliderElement
            // text={renderText(data.propertyScore)}
            title={"Property"}
            label={"PROPERTY"}
            text={"Are you looking for an affordable living?"}
            info={
              "Property prices include the median price range of properties located in the suburb."
            }
          />
        ) : null}
        {/* 
        {choice.jobField ? (
          <SliderElement
            // text={renderText(data.jobScore)}
            title={"Employment"}
            label={"JOB"}
            text={"Is having employment opportunities nearby important to you?"}
            
          />
        ) : null} */}
      </div>
    </React.Fragment>
  );
};

export default SidePanel;
