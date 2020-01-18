const db = require('./server/db/db')
const Campus = require('./server/db/campus')

const seed = async () => {
    await db.sync({force: true})

    await Campus.create({
        name: 'U University',
        location: 'Harlem'
    })

    db.close()
}

seed()