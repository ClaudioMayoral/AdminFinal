const modeloVacante = require('../../utils/database').models.vacante
const modeloVacanteCandidato = require('../../utils/database').models.vacante_candidato
const mensajes = require('../../utils/exceptions')


exports.getVacanteCandidatos = (req, res)=>{
    modeloVacanteCandidato.findAll().then(vacanteCandidato=>{
        res.json(vacanteCandidato)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.getVacanteCandidato = (req, res)=>{
    modeloVacanteCandidato.findAll({
        where:{
            id_vacante: req.params.id_vacante,
            id_candidato: req.params.id_candidato,
        }
    }).then(vacanteCandidato=>{
        res.json(vacanteCandidato[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.getCandidato = (req, res)=>{
    modeloVacanteCandidato.findAll({
        where:{
            id_candidato: req.params.id,
        }
    }).then(candidato=>{
        res.json(candidato)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.getVacante = (req, res)=>{
    modeloVacanteCandidato.findAll({
        where:{
            id_vacante: req.params.id,
        }
    }).then(vacante=>{
        res.json(vacante)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createVacanteCandidato = (req, res)=>{

    modeloVacanteCandidato.create({
        id_vacante: req.body.idVacante,
        id_candidato: req.body.idCandidato,
    }).then(result=>{
        updateVacante(req.body.idVacante)
        res.json({estado:mensajes.SuccessCreate})
    })
    .catch((err)=>{
        res.json({estado: mensajes.Forbiden})
    })
}


function updateVacante(id){

    modeloVacante.findAll({
        where:{
            id: id
        }
    }).then(vacante=>{
        modeloVacante.update({
            cantidad: vacante[0].cantidad - 1,
        },{
            where:{
                id: id
            }
        })
        .then(()=>{
            res.json({estado:mensajes.SuccessUpdate})
        })
        .catch((err)=>{
            res.json({estado: mensajes.NotFoundException})
        })
        res.json(vuelo[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })

 
}


