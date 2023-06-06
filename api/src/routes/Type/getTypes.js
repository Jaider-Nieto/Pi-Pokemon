const { getTypes } = require('../../Controllers/controllers');
const { Type } = require('../../db')

const getTypesRouter = require('express').Router()

getTypesRouter

.get('/', async (req, res) => {
    try {
        const data = await getTypes()

        // const data = await Type.findAll()
        return res.status(200).json(data)
    } catch ({ message }) {
        
    }
})

module.exports = getTypesRouter;