import { createContext } from "react";
const initialScore = {
  healthScore: 0,
  educationScore: 0,
  propertyType: "buy",
  propertyScore: 0,
  jobScore: 0
};

export function parameterReducr(state = initialScore, action) {
  switch (action.type) {
    case "HEALTH":
      return {
        ...state,
        healthScore: action.payload.toFixed(1)
      };
    case "EDUCATION":
      return {
        ...state,
        educationScore: action.payload
      };
    case "BUYORRENT":
      return {
        ...state,
        propertyType: action.payload
      };
    case "PROPERTY":
      return {
        ...state,
        propertyScore: action.payload
      };
    case "JOB":
      return {
        ...state,
        jobScore: action.payload
      };
    default: {
      return state;
    }
  }
}

export const ParameterContext = createContext(initialScore);
