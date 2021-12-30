const express = require('express')
const app = express()
const RouterCliente = require('./src/Routers/RouterCliente')

//EXECUTAR O app.use(express.json()), antes passa as ROTAS DO CONTROLLER
app.use(express.json())
app.use(RouterCliente)


app.post('/', (req, res)=>console.log(req.body))
app.listen(1234, ()=>console.log('servidor rodando.....'))