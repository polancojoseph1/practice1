const router = require('express').Router()
const Campus = require('../db/campus')

router.get('/', async (req, res, next) => {
    try {
        const campus = await Campus.findAll()
        res.json(campus)
    } catch (err) {
        next(err)
    }
})

module.exports = router