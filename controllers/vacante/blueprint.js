const modeloVacante = require('../../utils/database').models.vacante
const mensajes = require('../../utils/exceptions')


exports.getVacantes = (req, res)=>{
    modeloVacante.findAll().then(vacantes=>{
        res.json(vacantes)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.getVacante = (req, res)=>{
    modeloVacante.findAll({
        where:{
            id: req.params.id
        }
    }).then(vacante=>{
        res.json(vacante[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}

exports.getVacanteCliente = (req, res)=>{
    modeloVacante.findAll({
        where:{
            id_empresa: req.params.id
        }
    }).then(vacante=>{
        res.json(vacante)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createVacante = (req, res)=>{

    modeloVacante.create({
        requisitos: req.body.requisitos,
        remuneracion: req.body.remuneracion,
        id_empresa: req.body.idEmpresa,
        cantidad: req.body.cantidad,
        nombre: req.body.nombre,
    }).then(result=>{
        res.json({
            estado: mensajes.SuccessCreate,
            id: result.id
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}

