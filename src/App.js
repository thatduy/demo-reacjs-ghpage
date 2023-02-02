import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/abc"}
        element={<div>Heelo</div>}
      ></Route>
    </Routes>
  );
}

export default App;
