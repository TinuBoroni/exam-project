import { Helmet } from "react-helmet-async";
import useCounter from "./hooks/useCounter";


const Counter = () => {
  const {state,increment,decrement,reset,setValue} = useCounter()
  
  return (
    <div>

        <Helmet> 
        <title> My Counter App</title>
        <meta 
        name="description"
        content="Hello welcome to my counter App"/>
      <link rel="canonical" href="/Counter" />
      </Helmet> 
      <h1>{state.count}</h1>
      <div className="Counter">
      <input type='number' name='setValue' onChange={(e) => setValue(e)} />
        <br />

      <button className="btn btn-primary mx-2" onClick={increment}>
        Increment
      </button>

      <button className="btn btn-primary mx-2" onClick={decrement}>
        Decrement
      </button>

      <button className="btn btn-primary mx-2" onClick={reset}>
        Reset
      </button>

    </div>
    </div>
  );
};
export default Counter;
