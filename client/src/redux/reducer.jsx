import {
    CLEAN_STATE,
    GET_POKEMONS,
    GET_POKEMONS_DETAIL,
    GET_POKEMONS_NAME,
    GET_TYPES,
    POST_POKEMONS,
    PUT_POKEMONS,
} from './actions-types'

const intialState = {
    pokemons: [],
    pokemonsName: [],
    pokemonDetail: {},
    types: [],
    message: {}
}

const reducer = (state = intialState, { type, payload}) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        case GET_POKEMONS_DETAIL:
            return {
                ...state,
                pokemonDetail: payload
            }
        case GET_POKEMONS_NAME:
            return {
                ...state,
                pokemonsName: payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: payload
            }
        case POST_POKEMONS: 
            return {
                ...state,
                message: payload
            }
        case PUT_POKEMONS: 
            return {
                ...state,
                message: payload
            }
        case PUT_POKEMONS: 
            return {
                ...state,
                message: payload
            }
        case CLEAN_STATE:
            return{
                pokemons: [],
                pokemonDetail: {},
                types: [],
            }  
        default:
            return {...state}
    }
}

export default reducer;