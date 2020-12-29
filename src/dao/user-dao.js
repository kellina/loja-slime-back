const sql = require('./db')

async function findByUUID(uuid) {
    const [user] = await sql`select * from users where uuid=${uuid}`
    return user
}

async function insert(user) {
    const [insertedUser] = await sql`insert into users ${sql(
        user,
        'uuid',
        'full_name'
    )} returning *`
    return insertedUser
}

module.exports = { findByUUID, insert }
