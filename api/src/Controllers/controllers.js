const { URL_API } = require('dotenv').config().parsed;

// GET POKEMONS
const getPokemos = async () =>{
    const res = await fetch(`${URL_API}?offset=0&limit=120`)
    const data = await res.json()

    console.log(data.results.length)

    return data
}

const getPokemosById = () =>{
    
}

const getPokemosByName = () =>{
    
}

// POST POKEMONS
const postPokemons = () => {

}

// PUT POKEMONS
const putPokemons = () => {
    
}

// DELETE POKEMONS
const deletePokemons = () => {
    
}


module.exports = {
    getPokemos,
    getPokemosById,
    getPokemosByName,
    postPokemons,
    putPokemons,
    deletePokemons,
}