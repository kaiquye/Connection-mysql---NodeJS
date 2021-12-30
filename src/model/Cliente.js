const connection = require('../database/index')
const {DataTypes} = require('sequelize')

const Cliente = connection.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Cliente