import { 
    GET_POKEMONS,
    GET_POKEMONS_NAME,
    GET_POKEMONS_DETAIL,
    POST_POKEMONS,
    PUT_POKEMONS,
    DELETE_POKEMONS,
    GET_TYPES,
    ASCENDING_ORDER,
    DESCENDING_ORDER,
    ASCENDING_ATTACK,
    DESCENDING_ATTACK,
    FILTER_TYPES,
    FILTER_API,
    FILTER_DB,
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
    return async function (dispatch) {
        const res = await fetch('http://localhost:3001/pokemons', {
            method: 'POST',
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(pokemon)
        })
        const data = await res.json()
        dispatch({ type: POST_POKEMONS, payload: data })
    }
}

export const putPokemons = (pokemon) => {
    return async function (dispatch) {
        const res = await fetch('http://localhost:3001/pokemons', {
            method: 'PUT',
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(pokemon)
        })
        const data = await res.json()
        dispatch({ type: PUT_POKEMONS, payload: data })
    }
}

export const deletePokemons = (id) => {
    return async function(dispatch) {
        const res = await fetch(`http://localhost:3001/pokemons/${id}`,{
            method: 'DELETE'})
        const data = await res.json()
        dispatch({ type: DELETE_POKEMONS, payload: data })
    }
}

export const ascendingOrder = (state) => {
    const filterAscen = state.slice().sort( (a, b) =>
     a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    return function(dispatch) {
        dispatch({ type:  ASCENDING_ORDER, payload: filterAscen })
    }
}

export const descendingOrder = (state) => {
    const filterDescen = state.slice().sort( ( a, b ) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
    return function(dispatch) {
        dispatch({ type:  DESCENDING_ORDER, payload: filterDescen })
    }
}

export const ascendingAttack = (state) => {
    const filterAscen = state.slice().sort( (a, b) => a.attack - b.attack )
    return function(dispatch) {
        dispatch({ type:  ASCENDING_ATTACK, payload: filterAscen })
    }
}

export const descendingAttack = (state) => {
    const filterDescen = state.slice().sort( ( a, b ) => b.attack - a.attack)
    return function(dispatch) {
        dispatch({ type: DESCENDING_ATTACK, payload: filterDescen })
    }
}

export const filterByTypes = (state, type) => {
    const filterTypes = state.slice().filter(pokemon =>
        pokemon.types.map(types => types.name).includes(type)
    )
    console.log(filterTypes)
    return function(dispatch) {
        dispatch({ type: FILTER_TYPES, payload: filterTypes })
    }
}

export const filterByAPI = (state) => {
    const filterApi = state.slice().filter(pokemon =>
        typeof(pokemon.id) === 'number'
    )
    return function(dispatch) {
        dispatch({ type: FILTER_API, payload: filterApi })
    }
}

export const filterByDB = (state) => {
    const filterDB = state.slice().filter(pokemon =>
        typeof(pokemon.id) === 'string'
    )
    return function(dispatch) {
        dispatch({ type: FILTER_DB, payload: filterDB })
    }
}