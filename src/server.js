const app = require('./app')

const port = process.env.PORT || 3001

app.listen(port, function () {
    console.log(
        `O servidor está funcionando. Ouvindo conexões na porta ${port}.`
    )
})
