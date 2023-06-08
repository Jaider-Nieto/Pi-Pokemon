const { getTypes } = require('../../Controllers/controllers');
const { Type } = require('../../db')

const getTypesRouter = require('express').Router()

getTypesRouter

.get('/', async (req, res) => {
    try {
        const type = await Type.findByPk(20)

        if(!type) { await getTypes() }

        const data = await Type.findAll()
        return res.status(200).json(data)
    } catch ({ message }) {
        return res.status(404).json({ error: message})
    }
})

module.exports = getTypesRouter;