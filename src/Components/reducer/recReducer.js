export const recReducer = (state, action) => {
  switch (action.type) {
    case "HEALTH":
      return {
        ...state,
        healthScore: action.payload
      };
    case "EDUCATION":
      return {
        ...state,
        educationScore: action.payload
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
    case "RESETHEALTH":
      return {
        ...state,
        healthScore: 2
      };
    case "RESETEDU":
      return {
        ...state,
        educationScore: 2
      };
    case "RESETPROP":
      return {
        ...state,
        propertyScore: 2
      };
    case "RESETJOB":
      return {
        ...state,
        jobScore: 0
      };
    default: {
      return state;
    }
  }
};
