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
      <h4>Set Your Preferences</h4>
      <div style={{ margin: 20 }}>
        {choice.healthField ? (
          <>
            <i
              className="fas fa-hospital-symbol fa-2x"
              style={{ marginLeft: -30 }}
            />{" "}
            <SliderElement
              key={String(choice.healthField)}
              // text={renderText(data.healthScore)}
              title={"Health Care"}
              label={"HEALTH"}
              text={
                "How important is it for you to have healthcare facilities in your suburb? "
              }
              infoTitle={"Health Care"}
              info={
                "It includes information about the total number of hospitals and general practitioners located in the suburbs. It also includes the information about the approximate number of hospital beds located in the suburb."
              }
            />
          </>
        ) : null}

        {choice.educationField ? (
          <>
            <i
              className="fas fa-graduation-cap fa-2x"
              style={{ marginLeft: -30 }}
            />{" "}
            <SliderElement
              // text={renderText(data.educationScore)}
              title={"Education"}
              label={"EDUCATION"}
              text={
                "How important is it for you to have educational institutions in your suburb?"
              }
              infoTitle={"Educational Institutions"}
              info={
                "It includes information about the total number of preschool, primary schools and secondary schools in a suburb. The Index of Community Socio-Educational Advantage (ICSEA) score for primary and secondary schools and the Victorian Certificate of Education (VCE) study score for secondary schools have also been included in the information."
              }
            />
          </>
        ) : null}

        {choice.propertyField ? (
          <>
            <i className="fas fa-home fa-2x" style={{ marginLeft: -30 }} />{" "}
            <SliderElement
              // text={renderText(data.propertyScore)}
              title={"Property"}
              label={"PROPERTY"}
              text={
                "How important is it for you to have cheaper housing options in your suburb?"
              }
              infoTitle={"Property"}
              info={
                "It includes suburb-specific information about both the median house price and rental prices, which are separated by number of bedrooms"
              }
            />
          </>
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
