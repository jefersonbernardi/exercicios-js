const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))//se vier em um formulario
app.use(bodyParser.json())// se vier um json, transfora o json e um obj


app.get('/teste', (req, res) => res.send('OK'))
app.listen(8080, ()=> console.log('Executando...'))