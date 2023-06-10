import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Home,
  FormCreate,
  Detail
} from './Components'

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
