//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const vacanteController = require('../../controllers/vacante/blueprint')

//generar las rutas

router.get("/all",vacanteController.getVacantes)

router.get("/:id",vacanteController.getVacante)

router.get("/cliente/:id",vacanteController.getVacanteCliente)

router.post('/crear',vacanteController.createVacante)


module.exports = router
