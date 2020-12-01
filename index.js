const express = require('express') ///express -> servidor web
const postgres = require('postgres')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

const sql = postgres(process.env.DATABASE_URL)

app.get('/', async function(req, res) {
    res.send('Endpoint disponiveis: /produtos')
})

app.get('/produtos', async function(req, res) {
    let produtos = []
    if (req.query.nome) {
        produtos = await sql `select * from produtos where upper(nome) like ${'%' + req.query.nome.toUpperCase() + '%'}`
    } else {
        produtos = await sql `select * from produtos`
    }
    res.send(produtos)
})

// app.get('/clientes', async function (req, res) {
//     res.send("lista de clientes")
// })

app.listen(80, function() {
    console.log('O servidor está funcionando. Ouvindo conexões na porta 3001.')
})