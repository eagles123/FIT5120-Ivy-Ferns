import React from "react";
import NavBar from "./NavBar";
import ExpandList from "../common/ExpandList";

export default function FAQs() {
  return (
    <React.Fragment>
      <NavBar home={true} about={true} />
      <div className="container" style={{ marginTop: 100 }}>
        <h2>FREQUENTLY ASKED QUESTIONS (FAQ’s)</h2>
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
            "Answer: Click on the ‘Get Started’ button on the Home Page> another page having a list of four areas pops up> check/uncheck your priorities> click on Submit button>a page signifying level of importance opens up> check/uncheck your filters>click on Submit button> A recommended list of Suburbs will appear."
          }
        />
        <ExpandList
          question={"2. Can I change my preferences once they are chosen?"}
          response={
            "Answer: Land up to the page which has level of importance criteria. Select/unselect the importance level for the dimension required. The resultant suburb list will appear."
          }
        />
        <ExpandList
          question={
            "3. How do I choose the level of importance for each of my preferences?"
          }
          response={
            "Answer: Land up to the page which has level of importance criteria. Select/unselect the importance level for the dimension required. The resultant suburb list will appear."
          }
        />
        <ExpandList
          question={
            "4. Why are the same areas being reflected after changing the preferences?"
          }
          response={
            "Answer: The suburb list is displayed according to your chosen preference and level of importance criteria. If you are getting the same list for your chosen preferences, this means they are the ones that abide your input criterion. If you wish to see another list, you can choose different level of importance for the chosen dimensions or maybe different dimensions."
          }
        />
      </div>
    </React.Fragment>
  );
}
