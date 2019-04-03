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
        healthField: false,
        educationField: false,
        propertyField: false,
        jobField: false
      };
    default: {
      return choice;
    }
  }
};
