import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonsById } from "../../redux/actions";

const Detail = () => {
  const param = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsById(param));
  }, []);

  const state = useSelector((state) => state.pokemonDetail);

  console.log(state);

  return (
    <div>
      <img src={state.image} alt={state.name} />
      <h1> id: {state.id} </h1>
      <h1> name: {state.name} </h1>
      <h1> health: {state.health} </h1>
      <h1> attack: {state.attack} </h1>
      <h1> defense: {state.defense} </h1>
      <h1> speed: {state.speed} </h1>
      <h1> height: {state.height} </h1>
      <h1> weight: {state.weight} </h1>
      <div>
        <h1>types:</h1>
        {state.types?.map((type, i) => (
          <h2 key={i}> {type.name} </h2>
        ))}
      </div>
    </div>
  );
};

export default Detail;
