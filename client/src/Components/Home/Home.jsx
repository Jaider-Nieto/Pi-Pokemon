import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonsById, getTypes } from "../../redux/actions";
import { NavLink } from "react-router-dom";

const Home = () => {
  // const dispatch = useDispatch()

  // const state = useSelector((state)=> state.pokemons)

  // useEffect(() => {
  //     dispatch(getPokemons())
  //     dispatch(getPokemonsById(1))
  //     dispatch(getTypes())
  // }, []);
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
