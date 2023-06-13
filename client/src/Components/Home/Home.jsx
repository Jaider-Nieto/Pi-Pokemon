import { useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const navigate = useNavigate()

  return (
    <div>
      <h1>home</h1>
      <button onClick={ () => navigate('/create')}> create </button>
      { pokemons.length ? 
      <CardContainer state={pokemons} /> : 
      <h2>loading</h2> }
    </div>
  );
};

export default Home;
