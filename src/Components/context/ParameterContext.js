import { createContext } from "react";
const initialScore = {
  healthScore: 0,
  educationScore: 0,
  propertyType: "buy",
  propertyScore: 0,
  jobScore: 0
};

export const ParameterContext = createContext(initialScore);
