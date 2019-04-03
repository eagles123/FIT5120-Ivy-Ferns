import { createContext } from "react";
const initialScore = {
  healthScore: 0,
  educationScore: 0,
  propertyType: "buy",
  propertyScore: 0,
  jobScore: 0
};

export const ParameterContext = createContext(initialScore);

const initalChoice = {
  healthField: false,
  educationField: false,
  propertyField: false,
  jobField: false
};

export const ChoiceContext = createContext(initalChoice);
