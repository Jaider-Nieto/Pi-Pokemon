import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Home,
  FormCreate,
  Detail
} from './Components'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons, getTypes } from './redux/actions'

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, []);

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
