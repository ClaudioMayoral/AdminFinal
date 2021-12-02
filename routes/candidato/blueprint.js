//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const candidatoController = require('../../controllers/candidato/blueprint')

//generar las rutas

router.get("/all",candidatoController.getCandidatos)

router.get("/:id",candidatoController.getCandidato)

router.post('/crear',candidatoController.createCandidato)

router.post('/actualizar/:id',candidatoController.updateCandidato)


module.exports = router
