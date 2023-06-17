import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import handleError from "../validations";
import { getPokemonsById, postPokemons, putPokemons } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const param = useParams().id
  const location = useLocation().pathname

  if(location === `/edit/${param}`){ 
    useEffect(() => {
      dispatch(getPokemonsById(param))
    }, [])};
  const stateTypes = useSelector((state) => state.types);
  const detail = useSelector((state) => state.pokemonDetail);

  const [pokemon, setPokemon] = useState({
    name: location === `/edit/${param}` ? detail.name : "",
    image: location === `/edit/${param}` ? detail.image : "",
    health: location === `/edit/${param}` ? detail.health : "",
    attack: location === `/edit/${param}` ? detail.attack : "",
    defense: location === `/edit/${param}` ? detail.defense : "",
    speed: location === `/edit/${param}` ? detail.speed : "",
    height: location === `/edit/${param}` ? detail.height : "",
    weight: location === `/edit/${param}` ? detail.weight : "",
    types: detail.types ? detail.types.map(type => type.name) : [],
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const handlerTypes = (event) => {
    const find = pokemon.types.find((type) => type === event.target.innerText);

    if (find) return;

    setPokemon({
      ...pokemon,
      types: [...pokemon.types, event.target.innerText],
    });
  };

  const handleChange = (event) => {
    setPokemon({ ...pokemon, [event.target.name]: event.target.value });
    setError(
      handleError({
        ...pokemon,
        [event.target.name]: event.target.value,
      })
    );
  };

  
  const deleteType = (event) => {
    const filtered = pokemon.types.filter(
      (type) => type !== event.target.innerText
      );
      setPokemon({ ...pokemon, types: filtered });
    };
    
  const handleSubmit = (event) => {
      event.preventDefault();
      pokemon.health = parseInt(pokemon.health)
      pokemon.attack = parseInt(pokemon.attack)
      pokemon.defense = parseInt(pokemon.defense)
      pokemon.speed = parseInt(pokemon.speed)
      pokemon.height = parseInt(pokemon.height)
      pokemon.weight = parseInt(pokemon.weight)

      if(location === `/edit/${param}`){
        pokemon.id = detail.id
        dispatch(putPokemons(pokemon))
        setPokemon({
          id: "",
          name: "",
          image: "",
          health: "",
          attack: "",
          defense: "",
          speed: "",
          height: "",
          weight: "",
          types: []
        })
        navigate(`/detail/${param}`)
        return
      }
      dispatch(postPokemons(pokemon))
      setPokemon({
        name: "",
        image: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
      })
      navigate(`/home`)
    };
  return (
    <form onSubmit={handleSubmit} >
      <h1>creation form</h1>
      <label>
        name:
        <input
          value={pokemon.name}
          onChange={handleChange}
          name="name"
          placeholder="Your pokemon name"
        />
      </label>
      {error.name && <span> {error.name} </span>}

      <label>
        image:
        <input
          value={pokemon.image}
          onChange={handleChange}
          name="image"
          placeholder="Example.png or .jpg"
        />
      </label>
      {error.image && <span> {error.image} </span>}

      <label>
        health:
        <input
          value={pokemon.health}
          onChange={handleChange}
          name="health"
          placeholder="Health 1 to 10000"
        />
      </label>
      {error.health && <span> {error.health} </span>}

      <label>
        attack:
        <input
          value={pokemon.attack}
          onChange={handleChange}
          name="attack"
          placeholder="Attack 1 to 10000"
        />
      </label>
      {error.attack && <span> {error.attack} </span>}

      <label>
        defense:
        <input
          value={pokemon.defense}
          onChange={handleChange}
          name="defense"
          placeholder="Defense 1 to 10000"
        />
      </label>
      {error.defense && <span> {error.defense} </span>}

      <label>
        speed:
        <input
          value={pokemon.speed}
          onChange={handleChange}
          name="speed"
          placeholder="Speed 1 to 10000"
        />
      </label>
      {error.speed && <span> {error.speed} </span>}

      <label>
        height:
        <input
          value={pokemon.height}
          onChange={handleChange}
          name="height"
          placeholder="Height 1 to 100"
        />
      </label>
      {error.height && <span> {error.height} </span>}

      <label>
        weight:
        <input
          value={pokemon.weight}
          onChange={handleChange}
          name="weight"
          placeholder="Weight 1 to 10000"
        />
      </label>
      {error.weight && <span> {error.weight} </span>}

      <div>
        <h1>Types: </h1>
        {stateTypes?.map((type, i) => (
          <div key={i} onClick={handlerTypes}>
            {type.name}
          </div>
        ))}
      </div>
      <hr />
      <div>
        {pokemon.types?.length < 1 ? (
          <span> You should choose at least one type </span>
        ) : (
          pokemon.types?.map((type, i) => (
            <div onClick={deleteType} key={i}>
              {type}
            </div>
          ))
        )}
      </div>

      <button> { location === `/edit/${param}` ? 'edit' : 'create' } </button>
    </form>
  );
};

export default Form;
