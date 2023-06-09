import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import FormCreate from "./Components/FormCreate/FormCreate";
import Detail from "./Components/Detail/Detail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<FormCreate/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
};

export default App;
