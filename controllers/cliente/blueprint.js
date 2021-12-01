const modeloCliente = require('../../utils/database').models.cliente
const mensajes = require('../../utils/exceptions')


exports.getClientes = (req, res)=>{
    modeloCliente.findAll().then(clientes=>{
        res.json(clientes)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.getCliente = (req, res)=>{
    modeloCliente.findAll({
        where:{
            id: req.params.id
        }
    }).then(cliente=>{
        res.json(cliente[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createCliente = (req, res)=>{

    modeloCliente.create({
        empresa: req.body.empresa,
        correo: req.body.correo,
    }).then(result=>{
        res.json({
            estado: mensajes.SuccessCreate,
            id: result.id
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:mensajes.Forbiden})
    })
}

