/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./reducers/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch(actions.incer());
  };
  const Decrement = () => {
    dispatch(actions.decrement(10));
  };
  return (
    <div>
      <h1>counter</h1>
      <h1>{counter}</h1>
      <h3></h3>

      <button onClick={() => Increment()}>Increment</button>
      <button onClick={() => Decrement()}>Decrement</button>
    </div>
  );
}

export default App;

// console.log(actions.getState.toString);
