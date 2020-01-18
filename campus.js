const Sequelize = require('sequelize')
const db = require('./db')

const Campus = db.define('campus', {
    name: Sequelize.STRING,
    location: Sequelize.STRING
})

module.exports = Campus