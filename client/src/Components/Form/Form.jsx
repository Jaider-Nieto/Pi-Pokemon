import style from "./Form.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import handleError from "../validations";
import {
  getPokemons,
  getPokemonsById,
  getTypes,
  postPokemons,
  putPokemons,
} from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams().id;
  const location = useLocation().pathname;

  if (location === `/edit/${param}`) {
    useEffect(() => {
      dispatch(getPokemonsById(param));
    }, []);
  }
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
    types: detail.types ? detail.types.map((type) => type.name) : [],
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
    pokemon.health = parseInt(pokemon.health);
    pokemon.attack = parseInt(pokemon.attack);
    pokemon.defense = parseInt(pokemon.defense);
    pokemon.speed = parseInt(pokemon.speed);
    pokemon.height = parseInt(pokemon.height);
    pokemon.weight = parseInt(pokemon.weight);

    if (location === `/edit/${param}`) {
      pokemon.id = detail.id;
      dispatch(putPokemons(pokemon));
      dispatch(getPokemons());
      dispatch(getTypes());
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
        types: [],
      });
      navigate(`/detail/${param}`);
      return;
    }
    dispatch(postPokemons(pokemon));
    dispatch(getPokemons());
    dispatch(getTypes());
    setPokemon({
      name: "",
      image: "",
      health: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    navigate(`/home`);
  };
  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <h2 className={style.title}>
        {location === `/edit/${param}`
          ? "Edit Your Pokemon"
          : "Create Your Pokemon"}
      </h2>
      <label className={style.labelLeft}>name:</label>
      <input
        className={style.inputLeft}
        value={pokemon.name}
        onChange={handleChange}
        name="name"
        placeholder="Your pokemon name"
      />
      {error.name && <span className={style.errorName}> {error.name} </span>}

      <label className={style.labelRight}>image:</label>
      <input
        className={style.inputRight}
        value={pokemon.image}
        onChange={handleChange}
        name="image"
        placeholder="Example.png or .jpg"
      />
      {error.image && <span className={style.errorImage}> {error.image} </span>}

      <label className={style.labelLeft}>health:</label>
      <input
        className={style.inputLeft}
        value={pokemon.health}
        onChange={handleChange}
        name="health"
        placeholder="Health 1 to 10000"
      />
      {error.health && (
        <span className={style.errorHealth}> {error.health} </span>
      )}

      <label className={style.labelRight}>attack:</label>
      <input
        className={style.inputRight}
        value={pokemon.attack}
        onChange={handleChange}
        name="attack"
        placeholder="Attack 1 to 10000"
      />
      {error.attack && (
        <span className={style.errorAttack}> {error.attack} </span>
      )}

      <label className={style.labelLeft}>defense:</label>
      <input
        className={style.inputLeft}
        value={pokemon.defense}
        onChange={handleChange}
        name="defense"
        placeholder="Defense 1 to 10000"
      />
      {error.defense && (
        <span className={style.errorDefense}> {error.defense} </span>
      )}

      <label className={style.labelRight}>speed:</label>
      <input
        className={style.inputRight}
        value={pokemon.speed}
        onChange={handleChange}
        name="speed"
        placeholder="Speed 1 to 10000"
      />
      {error.speed && <span className={style.errorSpeed}> {error.speed} </span>}

      <label className={style.labelLeft}>height:</label>
      <input
        className={style.inputLeft}
        value={pokemon.height}
        onChange={handleChange}
        name="height"
        placeholder="Height 1 to 100"
      />
      {error.height && (
        <span className={style.errorHeight}> {error.height} </span>
      )}

      <label className={style.labelRight}>weight:</label>
      <input
        className={style.inputRight}
        value={pokemon.weight}
        onChange={handleChange}
        name="weight"
        placeholder="Weight 1 to 10000"
      />
      {error.weight && (
        <span className={style.errorWeight}> {error.weight} </span>
      )}

      <div className={style.typesContainer}>
        <h2 className={style.typesTitle}>Types: </h2>
        {stateTypes?.map((type, i) => (
          <div className={style[type.name]} key={i} onClick={handlerTypes}>
            {type.name}
          </div>
        ))}
      </div>
      <hr />
      <div className={style.typesContainer}>
        {pokemon.types.length > 0 ? (
          <h2 className={style.typesTitleChosen}>Chosen: </h2>
        ) : (
          ""
        )}
        {pokemon.types?.length < 1 ? (
          <span className={style.spanType}>
            You should choose at least one type
          </span>
        ) : (
          pokemon.types?.map((type, i) => (
            <div className={style[type]} onClick={deleteType} key={i}>
              {type}
            </div>
          ))
        )}
      </div>

      <button
        disabled={
          error.name ||
          error.image ||
          error.health ||
          error.attack ||
          error.defense ||
          error.speed ||
          error.height ||
          pokemon.name === "" ||
          pokemon.image === "" ||
          pokemon.health === "" ||
          pokemon.attack === "" ||
          pokemon.defense === "" ||
          pokemon.speed === "" ||
          pokemon.height === "" ||
          pokemon.types.length === 0
        }
        className={style.button}
      >
        {location === `/edit/${param}` ? "edit" : "create"}
      </button>
    </form>
  );
};

export default Form;
