const modeloCandidato = require('../../utils/database').models.candidato
const mensajes = require('../../utils/exceptions')


exports.getCandidatos = (req, res)=>{
    modeloCandidato.findAll().then(candidatos=>{
        res.json(candidatos)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}

exports.getCandidato = (req, res)=>{
    modeloCandidato.findAll({
        where:{
            id: req.params.id
        }
    }).then(candidato=>{
        res.json(candidato[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createCandidato = (req, res)=>{
    modeloCandidato.create({
        nombre: req.body.nombre,
        correo: req.body.correo,
        escolaridad: req.body.escolaridad,
        carrera: req.body.carrera,
        requisitos: req.body.requisitos,
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
