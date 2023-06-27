import {
  ASCENDING_ATTACK,
  ASCENDING_ORDER,
  CLEAN_STATE,
  DELETE_POKEMONS,
  DESCENDING_ATTACK,
  DESCENDING_ORDER,
  FILTER_API,
  FILTER_DB,
  FILTER_TYPES,
  GET_POKEMONS,
  GET_POKEMONS_DETAIL,
  GET_POKEMONS_NAME,
  GET_TYPES,
  POST_POKEMONS,
  PUT_POKEMONS,
  RESET,
  RESET_MSG,
  RESET_NAME,
  RESET_DETAIL
} from "./actions-types";

const intialState = {
  pokemons: [],
  pokemonsAll: [],
  pokemonsName: [],
  pokemonDetail: {},
  types: [],
  filtered: [],
  postMsg: {},
  putMsg: {},
  deleteMsg: {},
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        pokemonsAll: payload,
      };
    case GET_POKEMONS_DETAIL:
      return {
        ...state,
        pokemonDetail: payload,
      };
    case GET_POKEMONS_NAME:
      return {
        ...state,
        pokemonsName: payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };
    case POST_POKEMONS:
      return {
        ...state,
        postMsg: payload,
      };
    case PUT_POKEMONS:
      return {
        ...state,
        putMsg: payload,
      };
    case DELETE_POKEMONS:
      return {
        ...state,
        deleteMsg: payload,
      };
    case CLEAN_STATE:
      return {
        pokemons: [],
        pokemonDetail: {},
        types: [],
      };
    case DESCENDING_ORDER:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case ASCENDING_ORDER:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case DESCENDING_ATTACK:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case ASCENDING_ATTACK:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case FILTER_TYPES:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case FILTER_API:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case FILTER_DB:
      return {
        ...state,
        pokemons: payload,
        filtered: payload,
      };
    case RESET:
      return {
        ...state,
        pokemons: [],
        pokemonDetail: [],
        filtered: [],
      };
    case RESET_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };
    case RESET_MSG:
      return {
        ...state,
        postMsg: {},
        putMsg: {},
        deleteMsg: {},
      };
    case RESET_NAME:
      return {
        ...state,
        pokemonsName: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
