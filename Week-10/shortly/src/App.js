import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import InputShortener from "./InputShortener";
import BackgroundAnimate from "./BackgroundAnimate";
import LinkResult from "./LinkResult";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./Components/NavBar/Contact";
import { About } from "./Components/NavBar/About";

function App() {
  const [inputValue, setInputValue] = useState("");
  const email = "sujithkumar8897@gmail.com";
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InputShortener setInputValue={setInputValue} />
                <BackgroundAnimate />
                <LinkResult inputValue={inputValue} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <BackgroundAnimate />
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <BackgroundAnimate />
                <Contact email={email} />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
