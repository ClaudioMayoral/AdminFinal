const path = require("path")
//Importar express
const express = require('express')
//Crear la aplicación web
const app = express()

const sequelize = require('./utils/database')
const candidato = require('./routes/candidato/blueprint')
const cliente = require('./routes/cliente/blueprint')
const vacante_candidato = require('./routes/vacante_candidato/blueprint')
const vacante = require('./routes/vacante/blueprint')

//Middleware
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use("/candidato",candidato)
app.use("/cliente",cliente)
app.use("/vacantecandidato",vacante_candidato)
app.use("/vacante", vacante)

//Lanzar la aplicación para escuchar peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
    })
    })
    .catch(err=>console.log(err))