const Sequelize = require('sequelize')

const db = new Sequelize('practice-db', 'newuser', '', {
    host: 'localhost',
    dialect: 'postgres'
})  

module.exports = db