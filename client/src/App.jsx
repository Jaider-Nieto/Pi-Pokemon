import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  LandingPage,
  Home,
  Form,
  Detail,
  Nav,
  Search
} from './Components'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons, getTypes } from './redux/actions'

const App = () => {
  const location = useLocation().pathname

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      {location === '/' ? '' : <Nav/> }
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/create" element={<Form/>} />
        <Route path="/edit/:id" element={<Form/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
};

export default App;
