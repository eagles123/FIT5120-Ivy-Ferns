const recReducer = (state, action) => {
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
      case "BUYORRENT":
        return {
          ...state,
          propertyType: action.payload
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
      default: {
        return state;
      }
    }
},
  {
    healthScore: 0,
    educationScore: 0,
    propertyType: "buy",
    propertyScore: 0,
    jobScore: 0
  }
