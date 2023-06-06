const { getPokemos, getPokemosById, getPokemosByName } = require('../../Controllers/controllers');

const getPokemonsRouter = require('express').Router();

getPokemonsRouter

.get('/', async (req, res) => {
    try {

        const { name } = req.query

        if(name){
            const data = await getPokemosByName(name)
            return res.status(200).json(data)
        }

        const data = await getPokemos()
        return res.status(200).json(data)
    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }

})

.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const source = isNaN(id) ? 'db' : 'api';

        const data = await getPokemosById(id, source)
        return res.status(200).json(data)
    } catch ({message}) {
        return res.status(404).json({ error: message })
    }

})

module.exports = getPokemonsRouter;