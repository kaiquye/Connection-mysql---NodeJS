const Router = require('express').Router()
const controllerCliente = require('../Controller/Cliente')

Router.post('/novousuario', controllerCliente.Criar)

module.exports = Router;