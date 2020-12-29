// OBJETIVO: Acessar tabela de produtos
const sql = require('./db')

async function findAll() {
    return await sql`select * from products`
}

async function findByName(name) {
    return await sql`select * from products where upper(name) like ${
        '%' + name + '%'
    }`
}

module.exports = { findAll, findByName }
