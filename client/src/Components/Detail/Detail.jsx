import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePokemons, getPokemonsById } from "../../redux/actions";
import { TiPencil } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'

const Detail = () => {
  const param = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getPokemonsById(param));
  }, []);

  const state = useSelector((state) => state.pokemonDetail);

  const handleDelete = () => {
    dispatch(deletePokemons(state.id))
    navigate('/home')
  }

  return (
    <div>
      { typeof(state.id) === 'string' 
      ? <button onClick={() => navigate(`/edit/${state.id}`)}> <TiPencil/> </button>
      : '' }
      { typeof(state.id) === 'string' 
      ? <button onClick={handleDelete}> <MdDelete/> </button> 
      : ''}

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
