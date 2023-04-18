import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as themeActionCreators from "./action/theme.action";

function App() {
  const dispatch = useDispatch();
  const { setDarkTheme, setLightTheme } = bindActionCreators(
    themeActionCreators,
    dispatch
  );

  const { theme } = useSelector((state) => state.theme);

  const flipLight = () => {
    if (theme === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <div className={`room ${theme}`}>
      the room is {theme}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}

export default App;
