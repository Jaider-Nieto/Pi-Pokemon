import { 
    GET_POKEMONS,
    GET_POKEMONS_NAME,
    GET_POKEMONS_DETAIL,
    POST_POKEMONS,
    PUT_POKEMONS,
    DELETE_POKEMONS,
    GET_TYPES,
} from './actions-types';

export const getPokemons = (name) => {
    return async function(dispatch) {
        const res = await fetch('http://localhost:3001/pokemons')
        const data = await res.json()
        dispatch({ type: GET_POKEMONS, payload: data })
    }
}

export const getPokemonsByName = (name) => {
    return async function(dispatch) {
        const res = await fetch(`http://localhost:3001/pokemons?name=${name}`)
        const data = await res.json()
        dispatch({ type: GET_POKEMONS_NAME, payload: data })
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

export const postPokemons = (pokemon) => {
    console.log(pokemon)
    return async function (dispatch) {
        const res = await fetch('http://localhost:3001/pokemons', {
            method: 'POST',
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(pokemon)
        })
        console.log(res)
        const data = await res.json()
        console.log(data)
        dispatch({ type: POST_POKEMONS, payload: data })
    }
}