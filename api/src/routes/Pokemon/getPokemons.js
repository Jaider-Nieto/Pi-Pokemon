const { getPokemos } = require('../../Controllers/controllers');

const getPokemonsRouter = require('express').Router();

getPokemonsRouter

.get('/', async (req, res) => {
    try {
        const data = await getPokemos()
        return res.status(200).json(data)
    } catch ({message}) {
        return res.status(400).json({ error: message })
    }

})

.get('/:id', (req, res) => {

})

module.exports = getPokemonsRouter;