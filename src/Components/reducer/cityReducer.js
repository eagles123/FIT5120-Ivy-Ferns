//reducer for choosing city at recommender page
export const cityReducer = (state, action) => {
  switch (action.type) {
    case "Geelong":
      return {
        ...state,
        geelong: action.payload
      };
    case "Ballarat":
      return {
        ...state,
        ballarat: action.payload
      };
    case "Bendigo":
      return {
        ...state,
        bendigo: action.payload
      };
    default: {
      return state;
    }
  }
};
