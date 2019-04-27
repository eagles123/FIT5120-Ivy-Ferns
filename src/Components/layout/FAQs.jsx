import React from "react";
import ExpandList from "../common/ExpandList";
import PageFooter from "./Footer";

export default function FAQs() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: 100, height: "100%" }}>
        <h3 style={{ textAlign: "center" }}>
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h3>
        <ExpandList
          question={"How do I find the suburb according to my preferences?"}
          response={
            "Click on the ‘Get Started’ button on the Home Page> another page having a list of four areas pops up> check/uncheck your priorities> click on Submit button>a page signifying level of importance opens up> check/uncheck your filters>click on Submit button> A recommended list of suburbs will appear."
          }
        />
        <ExpandList
          question={"Can I change my preferences once they are chosen?"}
          response={
            "You can reselect the preference by going to “Set your Preferences” page or Go to page where you select your level of importance through sliders. There is a filter option which contains “By preference”. You can choose or change any previous preference from that filter."
          }
        />
        <ExpandList
          question={
            "How do I choose the level of importance for each of my preferences?"
          }
          response={
            "Go to the page where you select your level of importance through slider. You will see various questions and a slider with each of them having 3 signifiers. Scroll the slider towards your desired requirement and you can choose the level of preference."
          }
        />
        <ExpandList
          question={
            "Why the same ranking of the suburbs is being shown even after changing the Preferences?"
          }
          response={
            "The suburb list is displayed according to your chosen preference and level of importance criteria. If you are getting the same list for your chosen preferences, this means they are the ones that abide your input criterion. If you wish to see another list, you can choose different level of importance for the chosen preferences or maybe different preferences on a whole."
          }
        />
        <ExpandList
          question={
            "I am not aware what the preference “Educational Institutions” mean?"
          }
          response={
            "Go to the page “Set your Preferences”. Click on the tooltip icon which will display a textbox containing information as to what Educational institutions entails."
          }
        />
      </div>
      <div style={{ height: "10em" }} />
      <PageFooter />
    </React.Fragment>
  );
}
