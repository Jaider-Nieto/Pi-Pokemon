import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons())
  }, []);

  return (
    <div>
      <h1>home</h1>
      { pokemons.length ? 
      <CardContainer state={pokemons} /> : 
      <h2>loading</h2> }
    </div>
  );
};

export default Home;
