const { URL_API } = require('dotenv').config().parsed;
const cleanPokemon = require('../Auxiliar/auxiliar');
const { Pokemon, Type } = require('../db')

// GET POKEMONS
const getPokemos = async () =>{
    const array = []

    for(let i = 1; i <= 60; i++){
        const res = await fetch(`${URL_API}/${i}`)
        const results = await res.json()
        const clean = cleanPokemon(results)

        array.push(clean)
    }

    return array

    // // traemos los datos de la api
    // const res = await fetch(`${URL_API}?offset=0&limit=120`)
    // const { results } = await res.json()

    // // traemos os datos de la db
    // const dataDB = await Pokemon.findAll()

    // //unimos los datos de la db y la api en un solo array
    //  const data = [...dataDB , ...results]

    // // manejaamos el error si results esta vacio
    // if(!data) throw Error('Pokemons not found')

    // //retornamos la data
    // return data
}

const getPokemosById = () =>{
    
}

const getPokemosByName = () =>{
    
}

// POST POKEMONS
const postPokemons = async ( name, image, health, atack, defence, speed, height, weigth, types ) => {

    if( !name || !image || !health || !atack || !defence || !speed || !height || !weigth || !types )throw Error('There are mandatory fields not completed');

    const newPokemon = await Pokemon.create({ 
        name, 
        image, 
        health, 
        atack, 
        defence, 
        speed, 
        height, 
        weigth,
        types,
    })

    return 'The Pokemon was created successfully'

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