const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTED":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENTED":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_NUMBER":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};
