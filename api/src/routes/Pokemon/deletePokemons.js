const { deletePokemons } = require('../../Controllers/controllers');

const deletePokemonsRouter = require('express').Router();

deletePokemonsRouter

.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const data = await deletePokemons(id)

        return res.status(200).json({ message: data })
        
    } catch ({ message }) {
        res.status(400).json({error: message})
    }
})

module.exports = deletePokemonsRouter;