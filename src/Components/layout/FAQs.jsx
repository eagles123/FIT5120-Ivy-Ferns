import React from "react";
import NavBar from "./NavBar";
import ExpandList from "../common/ExpandList";
import PageFooter from "./Footer";

export default function FAQs() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: 100, height: "100%" }}>
        <h3 style={{ fontFamily: "Arial Black", textAlign: "center" }}>
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h3>
        {/* <ol style={{ fontSize: 30, marginLeft: 100 }}>
          <li style={{ marginTop: 30 }}>
          <ExpandList question={}
            How do I find the suburb according to my preferences?
          </li>
          <li style={{ marginTop: 30 }}>How do I choose my preferences?</li>
          <li style={{ marginTop: 30 }}>
            Can I change my preferences once they are chosen?
          </li>
          <li style={{ marginTop: 30 }}>
            Why are the same areas being reflected after changing the
            preferences?
          </li>
        </ol> */}
        <ExpandList
          question={"1. How do I find the suburb according to my preferences?"}
          response={
            "Click on the ‘Get Started’ button on the Home Page> another page having a list of four areas pops up> check/uncheck your priorities> click on Submit button>a page signifying level of importance opens up> check/uncheck your filters>click on Submit button> A recommended list of suburbs will appear."
          }
        />
        <ExpandList
          question={"2. Can I change my preferences once they are chosen?"}
          response={
            "Land up to the page which has level of importance criteria. Select/unselect the importance level for the dimension required. The resultant suburb list will appear."
          }
        />
        <ExpandList
          question={
            "3. How do I choose the level of importance for each of my preferences?"
          }
          response={
            "Go to the page which has level of importance for each dimension. You will see various questions and a slider with each of them having 3 signifiers. Scroll the slider towards your desired requirement and you can choose the level of preference. And the spellings for the preference when you directly click submit"
          }
        />
        <ExpandList
          question={
            "4. Why are the same areas being reflected after changing the preferences?"
          }
          response={
            "The suburb list is displayed according to your chosen preference and level of importance criteria. If you are getting the same list for your chosen preferences, this means they are the ones that abide your input criterion. If you wish to see another list, you can choose different level of importance for the chosen dimensions or maybe different dimensions."
          }
        />
      </div>
      <div style={{ height: "10em" }} />
      <PageFooter />
    </React.Fragment>
  );
}
