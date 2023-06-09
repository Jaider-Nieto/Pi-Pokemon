import { 
    GET_POKEMONS,
    POST_POKEMONS,
    PUT_POKEMONS,
    DELETE_POKEMONS,
    GET_POKEMONS_DETAIL,
    GET_TYPES
} from './actions-types';

export const getPokemons = (name) => {
    return async function(dispatch) {
        if(name){
            const res = await fetch(`http://localhost:3001/pokemons?name=${name}`)
            const data = await res.json()
            dispatch({ type: GET_POKEMONS, payload: data })
        }
        else{
            const res = await fetch('http://localhost:3001/pokemons')
            const data = await res.json()
            dispatch({ type: GET_POKEMONS, payload: data })
        }
    }
}

export const getTypes = () => {
    return async function(dispatch) {
        const res = await fetch('http://localhost:3001/types')
        const data = await res.json()
        dispatch({ type: GET_TYPES, payload: data })
    }
}

export const getPokemonsById = (id) => {
    return async function(dispatch) {
        const res = await fetch(`http://localhost:3001/pokemons/${id}`)
        const data = await res.json()
        dispatch({ type: GET_POKEMONS_DETAIL, payload: data })
    }
}