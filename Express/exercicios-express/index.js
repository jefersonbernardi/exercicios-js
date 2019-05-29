const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')


app.use((req, res, next) => {
    res.json({
        nome: 'Ipad',
        valor: 3200
    })
    // res.send('Estou <b> Bem</b>')
    next()
})
app.get('/clientes/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id} selecionado!`)

    next()
})
app.use(saudacao)
// :id e algo q pode ser mudado ma url
app.listen(3000, () => {
    console.log(`Back End Executando...`)
})