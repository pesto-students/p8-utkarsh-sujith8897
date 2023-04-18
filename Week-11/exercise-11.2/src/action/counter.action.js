export const addStep = () => (dispatch) => {
  dispatch({
    type: "ADD",
  });
};

export const resetSteps = () => (dispatch) => {
  dispatch({
    type: "RESET",
  });
};
