import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Counter from "./component/Counter";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./component/Error";
import usereducer from "./component/usereducer";
import useCounter from "./component/useCounter";

const App = () => {
  return (
    <div className="App">
      <div className="nav-link">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/usereducer">usereducer</NavLink>
          <NavLink to="/useCounter">useCounter</NavLink>
          <NavLink to="/error">Error</NavLink>
        </nav>
      </div>
      <counter value={0} />
      <useCounter />
      <usereducer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/useCounter" element={<useCounter />} />
        <Route path="/usereducer" element={<usereducer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
