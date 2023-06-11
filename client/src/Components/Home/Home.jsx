import { useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);

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
