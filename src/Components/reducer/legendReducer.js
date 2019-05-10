export const legendReducer = (state, action) => {
  switch (action.type) {
    case "Hospital":
      return {
        ...state,
        hospital: action.payload
      };
    case "Pre-School":
      return {
        ...state,
        preSchool: action.payload
      };
    case "Primary":
      return {
        ...state,
        primary: action.payload
      };
    case "Secondary":
      return {
        ...state,
        secondary: action.payload
      };
    default: {
      return state;
    }
  }
};
