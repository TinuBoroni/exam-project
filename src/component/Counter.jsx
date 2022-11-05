import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  return (
    <div>
      <h1>{value}</h1>
      <div className="Counter">
        <input type="text" placeholder="Set Value"  onClick = {handleIncrement}  />
        <br />

      <button className="btn btn-primary mx-2" onClick={handleIncrement}>
        Increment
      </button>

      <button className="btn btn-primary mx-2" onClick={handleDecrement}>
        Decrement
      </button>

      <button className="btn btn-primary mx-2" onClick={handleReset}>
        Reset
      </button>
    </div>
    </div>
  );
};
export default Counter;
