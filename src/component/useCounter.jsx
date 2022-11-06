import React from "react";
import { useReducer } from "react";

function useCounter(initialValue) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];
}

function counter() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div className="counter-use">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default useCounter;
