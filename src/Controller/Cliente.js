const connection = require('../database/index')
const schemaCliente = require('../model/Cliente')
const propiedades = {
    status : false, 
    data : []
}

module.exports =  {

    async Criar(req, res, next){
//BUSCANDO DADOS POR JSON DO BODY
        const {nome, email, cpf} = req.body

        //--------------------------------
        const resultado = {...propiedades}

//CRIANDO UM NOVO 'CLIENTE'
//INICIA UM MIDW PARA CONSEGUIR LER OS DADOS EM JSON() : app.use(express.json())
        try {
            let queryCliente = await schemaCliente.create({nome, email, cpf})
            resultado.status = true;
            console.log(resultado)
        } catch (error) { 
            resultado.status = false;
            console.log(resultado)
            console.log('erro ao cadastra algo no banco')
        }
        
    },


    async Buscar(req, res, next){

        const {nome} = req.body

        //--------------------------------
        const resultado = {...propiedades}

        try {
            
        let queryCliente = connection.find
        } catch (error) {
            
        }
    },
    
    async Deletar(req, res, next){

        const {nome} = req.body

        //--------------------------------
        const resultado = {...propiedades}

        try {
            
        let queryCliente = connection.find
        } catch (error) {
            
        }
    },
}