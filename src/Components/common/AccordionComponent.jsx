import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

export default function AccordionComponent({ question, answer }) {
  return (
    <>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton style={{ backgroundColor: "#dcedc8" }}>
            {question}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={{ backgroundColor: "#e8f5e9" }}>
          <p>{answer}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </>
  );
}
