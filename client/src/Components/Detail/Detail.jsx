import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonsById } from '../../redux/actions'


const Detail = () => {
  const param = useParams().id
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPokemonsById(param))
  }, []);
  
  const state = useSelector( state => state.pokemonDetail)

  console.log(state)



  return (
    <div>
      <img src={state.image} alt={state.name} />
      <h1> id: {state.id} </h1>
      <h1> name: {state.name} </h1>
      <h1> attack: {state.attack} </h1>
      <h1> defence: {state.defence} </h1>
      <h1> speed: {state.speed} </h1>
      <h1> height: {state.height} </h1>
      <h1> weight: {state.weight} </h1>
      {state.types?.map((type, i) => <h1 key={i}> {type.name} </h1>)}
    </div>
  );
};

export default Detail;
