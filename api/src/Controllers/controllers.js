const { URL_API } = require('dotenv').config().parsed;
const { json } = require('sequelize');
const {cleanPokemon, fetchPokeId} = require('../Auxiliar/auxiliar');
const { Pokemon, Type } = require('../db')
const { Op } = require('sequelize')

// GET POKEMONS
const getPokemos = async () =>{

    // traemos os datos de la db
    const dataDB = await Pokemon.findAll()

    // traemos los datos de la api
    const res = await fetch(`${URL_API}?limit=250`)
    const { results } = await res.json()

    //mapeamos sacando solamente las url del array results
    const urls = await results.map( poke => poke.url)

    // mapeamos y hacemos un fetch por cada url
    const rawData = await Promise.all( urls.map( url => fetchPokeId(url)))
    
    //manejamos el error cuando no haya nada en la api
    if(!rawData) throw Error('Pokemons not found')

    //limpiamos cada obj con una funcion la cual deja unicamente las propiedades de interes
    const dataApi = rawData.map( pokemon => cleanPokemon(pokemon))

    //unimos db y api
    const data = [...dataDB, ...dataApi]

    //retornamos los datos
    return data
}

const getPokemosById = async (id, sourse) => {
    if(sourse === 'api'){
        const data = await fetchPokeId(`${URL_API}${id}`)
        return cleanPokemon(data)
    }
    else{
        const data = await Pokemon.findOne({
            where: { id }
        })
        return data
    }
}

const getPokemosByName = async (name) =>{

    const dataDB = await Pokemon.findAll({
        where:{
            name: {
                [Op.iLike]: `%${name}%` } 
        }
    })

    const res = await fetch(`${URL_API}${name.toLowerCase()}`)
    const dataRaw = await res.json()
    const dataApi = [ cleanPokemon(dataRaw) ]

    const data = [...dataDB, ...dataApi]

    if(!data)throw Error('Pokemons not found')

    return data
}

// POST POKEMONS
const postPokemons = async ( name, image, health, attack, defense, speed, height, weight, types ) => {

    if( !name || !image || !health || !attack || !defense || !speed || !height || !weight || !types )throw Error('There are mandatory fields not completed');

    const newPokemon = await Pokemon.create({ 
        name, 
        image, 
        health, 
        attack, 
        defense, 
        speed, 
        height, 
        weight,
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