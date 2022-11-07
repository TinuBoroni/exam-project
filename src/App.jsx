import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Counter from "./component/Counter";
import Error from "./component/Error";

const App = () => {
  return (
    <div className="App">
      <div className="nav-link">
        
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Counter">Counter</NavLink>
          <NavLink to="*">Error</NavLink>
        </nav>
      </div>
      
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
