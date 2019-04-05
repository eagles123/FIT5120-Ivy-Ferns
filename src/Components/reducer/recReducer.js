export const recReducer = (state, action) => {
  switch (action.type) {
    case "HEALTH":
      return {
        ...state,
        healthScore: Math.floor(action.payload)
      };
    case "EDUCATION":
      return {
        ...state,
        educationScore: Math.floor(action.payload)
      };
    case "PROPERTY":
      return {
        ...state,
        propertyScore: Math.floor(action.payload)
      };
    case "JOB":
      return {
        ...state,
        jobScore: Math.floor(action.payload)
      };
    case "RESETHEALTH":
      return {
        ...state,
        healthScore: 0
      };
    case "RESETEDU":
      return {
        ...state,
        educationScore: 0
      };
    case "RESETPROP":
      return {
        ...state,
        propertyScore: 0
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
