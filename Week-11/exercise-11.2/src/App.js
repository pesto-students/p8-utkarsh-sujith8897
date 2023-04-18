import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActionCreators from "./action/counter.action";

function App() {
  const dispatch = useDispatch();
  const { addStep, resetSteps } = bindActionCreators(
    counterActionCreators,
    dispatch
  );
  const { counter } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h2>You've walked {counter} steps today!</h2>
      <button className="add-step" onClick={() => addStep()}>
        Add a step
      </button>
      <button onClick={() => resetSteps()}>Reset steps</button>
    </div>
  );
}

export default App;
