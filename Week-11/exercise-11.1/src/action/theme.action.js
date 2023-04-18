export const setDarkTheme = () => (dispatch) => {
  dispatch({
    type: "DARK",
  });
};

export const setLightTheme = () => (dispatch) => {
  dispatch({
    type: "LIGHT",
  });
};
