import { createContext } from "react";
const initialScore = {
  healthScore: 2,
  educationScore: 2,
  propertyScore: 2,
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
