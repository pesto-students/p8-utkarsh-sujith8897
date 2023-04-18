const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "ADD":
      return {
        counter: state.counter + 1,
      };
    case "RESET":
      return {
        counter: initialState.counter,
      };
    default:
      return state;
  }
};
