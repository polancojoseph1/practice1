const db = require('./db')
const Campus = require('./campus')

const seed = async () => {
    await db.sync({force: true})

    await Campus.create({
        name: 'U University',
        location: 'Harlem'
    })

    db.close()
}

seed()