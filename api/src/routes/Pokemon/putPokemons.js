const { putPokemons } = require('../../Controllers/controllers');
const putPokemonsRouter = require('express').Router();

putPokemonsRouter

.put('/', async (req, res) => {
    try {
        const { id, name, image, health, attack, defense, speed, height, weight, types } = req.body

        const data = await putPokemons( id, name, image, health, attack, defense, speed, height, weight, types )

        return res.status(200).json({ message: data })

    } catch ({ message }) {
        return res.status(400).json({ error: message})
    }
})

module.exports = putPokemonsRouter;