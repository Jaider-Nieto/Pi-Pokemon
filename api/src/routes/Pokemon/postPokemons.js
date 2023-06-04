const { postPokemons } = require('../../Controllers/controllers');

const postPokemonsRouter = require('express').Router();

postPokemonsRouter

.post('/', async (req, res) => {
    try {
        const { name, image, health, atack, defence, speed, height, weigth, types } = req.body

        const data = await postPokemons( name, image, health, atack, defence, speed, height, weigth, types )

        return res.status(200).json({ message: data })

    } catch ({ message }) {
        return res.status(400).json({ error: message})
    }

})

module.exports = postPokemonsRouter;
