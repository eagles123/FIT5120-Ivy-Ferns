//reducer to for chose which perference in the recommender page
export const choiceReducer = (choice, action) => {
  switch (action.type) {
    case "HEALTHFIELD":
      return {
        ...choice,
        healthField: action.payload
      };
    case "EDUCATIONFIELD":
      return {
        ...choice,
        educationField: action.payload
      };
    case "PROPERTYFIELD":
      return {
        ...choice,
        propertyField: action.payload
      };
    case "JOBFIELD":
      return {
        ...choice,
        jobField: action.payload
      };
    case "RESET":
      return {
        healthField: true,
        educationField: true,
        propertyField: true,
        jobField: false
      };
    default: {
      return choice;
    }
  }
};
