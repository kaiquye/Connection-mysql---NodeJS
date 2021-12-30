const Sequelize = require('sequelize')
//Arquivo de configuracão
require('dotenv').config()
//---------------nome da tabela, usuario, password
const connection = new Sequelize(process.env.DATABASE, process.env.ROOT, process.env.PASSWORD,{
    host : process.env.HOST, 
    dialect : process.env.DIALECT
})
module.exports = connection