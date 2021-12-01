//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const vacanteCandidatoController = require('../../controllers/vacante_candidato/blueprint')

//generar las rutas
router.get("/all", vacanteCandidatoController.getVacanteCandidatos)

router.get("/ambos/:id_vacante/:id_candidato", vacanteCandidatoController.getVacanteCandidato)

router.get("/vacante/:id", vacanteCandidatoController.getVacante)

router.get("/candidato/:id", vacanteCandidatoController.getCandidato)

router.post('/crear',vacanteCandidatoController.createVacanteCandidato)


module.exports = router