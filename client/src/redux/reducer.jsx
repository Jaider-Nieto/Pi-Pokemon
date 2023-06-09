import {
    CLEAN_STATE,
    GET_POKEMONS,
    GET_POKEMONS_DETAIL,
    GET_TYPES
} from './actions-types'

const intialState = {
    pokemons: [],
    pokemonDetail: {},
    types: [],
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
        case GET_TYPES:
            return {
                ...state,
                types: payload
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