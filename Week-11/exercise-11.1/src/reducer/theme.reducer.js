const initialState = {
  theme: "light",
};

export const themeReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "DARK":
      return {
        theme: "dark",
      };
    case "LIGHT":
      return {
        theme: "light",
      };
    default:
      return state;
  }
};
