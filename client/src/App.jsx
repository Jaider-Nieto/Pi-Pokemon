import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  LandingPage,
  Home,
  FormCreate,
  Detail,
  Nav,
  Search
} from './Components'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemons, getTypes } from './redux/actions'

const App = () => {
  const location = useLocation().pathname

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, []);

  return (
    <div>
      {location === '/' ? '' : <Nav/> }
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/create" element={<FormCreate/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
};

export default App;
