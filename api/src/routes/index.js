const { Router } = require('express');
// Importar todos los routers;
const getPokemonsRouter = require('./Pokemon/getPokemons');
const postPokemonsRouter = require('./Pokemon/postPokemons');
const putPokemonsRouter = require('./Pokemon/putPokemons');
const deletePokemonsRouter = require('./Pokemon/deletePokemons');
const getTypesRouter = require('./Type/getTypes');

const router = Router();

// Configurar los routers

//  -CRUD POKEMONS-

//  <--GET POKEMONS-->
router.use('/pokemons', getPokemonsRouter);

//  <--POST POKEMONS-->
router.use('/pokemons', postPokemonsRouter);

//  <--PUT POKEMONS-->
router.use('/pokemons', putPokemonsRouter)

//  <--DELETE POKEMONS-->
router.use('/pokemons', deletePokemonsRouter)

// TYPES

// <--GET TYPES-->
router.use('/types', getTypesRouter)


module.exports = router;
