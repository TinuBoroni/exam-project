import { useReducer } from "react";
import useCounter from "./useCounter";

function usereducer (initialValue) {
  const [count, setCount] = useReducer(initialValue);

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
        <div className="counter">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default usereducer;
