//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const clienteController = require('../../controllers/cliente/blueprint')

//generar las rutas

router.get("/all",clienteController.getClientes)

router.get("/:id",clienteController.getCliente)

router.post('/crear',clienteController.createCliente)


module.exports = router
