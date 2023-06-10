import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonsById, getTypes } from "../../redux/actions";
import CardContainer from "../CardContainer/CardContainer";

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state)=> state.pokemons)
  
  useEffect(() => {
    dispatch(getPokemons())
  }, []);

  return (
    <div>
      <h1>home</h1>
      { pokemons.length ? <CardContainer state={pokemons}/>  : "loading" }
    </div>
  );
};

export default Home;
