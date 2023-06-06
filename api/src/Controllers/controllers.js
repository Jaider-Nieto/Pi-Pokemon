const { URL_API, URL_API_TYPE } = require('dotenv').config().parsed;
const { json } = require('sequelize');
const {cleanPokemon, fetchPokeId} = require('../Auxiliar/auxiliar');
const { Pokemon, Type } = require('../db')
const { Op } = require('sequelize')

// GET POKEMONS
const getPokemos = async () =>{

    // traemos os datos de la db
    const dataDB = await Pokemon.findAll({
        include: {
            model: Type,
            attribute: ['id','name'],
            through:{
                attribute: []
            }
        }
    })

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

const getPokemosById = async (id, source) => {

    //si source es api 
    if(source === 'api'){

        //hacemos un fetch a la api 
        const data = await fetchPokeId(`${URL_API}${id}`)

        //manejamos el error si data esta vacio
        if(!data) throw Error('The ID does not exist')

        //retornamos la data limpia con la funcion cleanPokemon
        return cleanPokemon(data)
    }
    //caso contrario buscamos en la db 
    else{
        //buscamos con findOne ya que asi nos permite condicionar la busqueda y nos trae la primera coincidencia 
        const data = await Pokemon.findOne({
            where: { id },
            include: {
                model: Type,
                attribute: ['id','name'],
                through:{
                    attribute: []
                }
            }
        })
        //retornamos la data
        return data
    }
}

const getPokemosByName = async (name) =>{

    //buscamos en la db 
    const dataDB = await Pokemon.findAll({
        //traemos los que coincidan con name
        where:{
            name: {
                //traemos los que contengan name en cualquier parte de la palabra
                [Op.iLike]: `%${name}%` } ,
                
        },
        include: {
            model: Type,
            attribute: ['id','name'],
            through:{
                attribute: []
            }
        }
    })

    //hacemos un fetch el cual busca el pokemon por name y se pasa a minuscula
    const res = await fetch(`${URL_API}${name.toLowerCase()}`)
    const dataRaw = await res.json()
    //limpiamos la data con la funcion cleanPokemon
    const dataApi = [ cleanPokemon(dataRaw) ]

    //juntamos los datos de la db con los de la api
    const data = [...dataDB, ...dataApi]

    //si no encuentra nada en la db y en la api manejamos el error
    if(!data)throw Error('Pokemons not found')

    //retornamos la data
    return data
}

// POST POKEMONS
const postPokemons = async ( name, image, health, attack, defense, speed, height, weight, types ) => {

    //manejamos el error si no se enviaron todos los datos necesarios
    if( !name || !image || !health || !attack || !defense || !speed || !height || !weight || !types )throw Error('There are mandatory fields not completed');

    //creamos el pokemon con cada uno de los datos
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

    //retornamos un mensaje indicando que todo salio bien
    return 'The Pokemon was created successfully'

}

// PUT POKEMONS
const putPokemons = async (id, name, image, health, attack, defense, speed, height, weight, types) => {

    await Pokemon.update({
        name,
        image,
        health,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
    },{
        where: { id }
    })
    
    //retornamos un mensaje indicando que todo salio bien
    return 'The Pokemon was edited successfully'
}

// DELETE POKEMONS
const deletePokemons = async (id) => {
    
    await Pokemon.destroy({
        where:{ id }
    })

    return 'The Pokemon was deleted successfully'
}

//GET TYPES

const getTypes = async () => {
    const res = await fetch(`${URL_API_TYPE}`)  
    const { results } = await res.json()

    const data = results.map( type => {return type.name
        //Type.create({name: type.name})
    })

    return data
}


module.exports = {
    getPokemos,
    getPokemosById,
    getPokemosByName,
    postPokemons,
    putPokemons,
    deletePokemons,
    getTypes
}