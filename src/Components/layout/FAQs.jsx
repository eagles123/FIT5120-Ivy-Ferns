import React from "react";
import PageFooter from "./Footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import AccordionComponent from "./../common/AccordionComponent";

export default function FAQs() {
  return (
    <div className="faq">
      <div className="container" style={{ minHeight: "30vh" }}>
        <h3 style={{ textAlign: "center" }}>
          Frequently Asked Questions (FAQs)
        </h3>
        <hr />
        <br />
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{ backgroundColor: "#dcedc8" }}>
                How do I find the suburb according to my preferences?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ backgroundColor: "#e8f5e9" }}>
              <p>Click on the ‘Get Started’ button on the home page</p>
              <p>
                Uncheck or check any of the filters in the ‘Filter by:’ box as
                preferred.{" "}
              </p>
              <p>Adjust the sliders based on the questions</p>
              <p>The recommended suburbs list will appear on the right</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionComponent
            question={
              " Is there an error when the same suburbs are shown after changing my preferences?"
            }
            answer={
              "No, certain suburbs have more education and health facilities, and therefore they naturally rank higher than others. This is the reason why they often appear near the top of the list."
            }
          />
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{ backgroundColor: "#dcedc8" }}>
                What factors are taken into consideration for each of the three
                areas, Healthcare, Education and Property?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ backgroundColor: "#e8f5e9" }}>
              <p>
                Hovering over the tooltip icon{" "}
                {
                  <i
                    className="fas fa-info-circle fa-lg"
                    style={{ color: "#2962ff" }}
                  />
                }{" "}
                gives further information about the factors involved for each
                area.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionComponent
            question={"Why does the map not show locations of GPs?"}
            answer={
              "Due to the copyright limitations of the GP dataset, locations are not permitted to be showed."
            }
          />
          <AccordionComponent
            question={
              "When setting the ‘Health Care’ preference towards ‘Very Important’, why do the higher ranked suburbs not show hospitals?"
            }
            answer={
              "The ‘Health Care’ parameter takes both hospitals and GPs into account. This means that the higher ranked suburbs with no hospitals will have many GPs."
            }
          />
          <AccordionComponent
            question={
              "Why do I receive information on the data dashboard about schools when I uncheck ‘Education’ on the ‘Pick a Suburb’ page."
            }
            answer={
              "The best suburbs often have access to multiple services and due to the format of the data dashboard, school data will always be shown if it is available."
            }
          />
        </Accordion>
      </div>
      <div style={{ height: "10em" }} />
      <PageFooter />
    </div>
  );
}
