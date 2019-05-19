import React from "react";
import ExpandList from "../common/ExpandList";
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

export default function FAQs() {
  return (
    <React.Fragment>
      <div className="container" style={{ minHeight: "30vh" }}>
        <h3 style={{ textAlign: "center" }}>
          Frequently Asked Questions (FAQs)
        </h3>
        <hr />
        <br />
        <Accordion allowMultipleExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do I find the suburb according to my preferences?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ backgroundColor: "white" }}>
              <p>Click on the ‘Get Started’ button on the home page</p>
              <p>
                Uncheck or check any of the filters in the ‘Filter by:’ box as
                preferred.{" "}
              </p>
              <p>Adjust the sliders based on the questions</p>
              <p>The recommended suburbs list will appear on the right</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is there an error when the same suburbs are shown after changing
                my preferences?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ backgroundColor: "white" }}>
              <p>
                No, certain suburbs have more education and health facilities,
                and therefore they naturally rank higher than others. This is
                the reason why they often appear near the top of the list.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What factors are taken into consideration for each of the three
                areas, Healthcare, Education and Property?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ backgroundColor: "white" }}>
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
        </Accordion>
      </div>
      <div style={{ height: "23em" }} />
      <PageFooter />
    </React.Fragment>
  );
}
