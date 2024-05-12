const initialState = { color: "rgb(29,29,29)" };

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLOR_CHANGED":
      return { ...state, color: action.payload };

    default:
      return state;
  }
};
