import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/abc"}
        element={<div>Heelo ABC</div>}
      ></Route>
      <Route path={"/def"}
        element={<div>Heelo DEF</div>}
      ></Route>
    </Routes>
  );
}

export default App;
