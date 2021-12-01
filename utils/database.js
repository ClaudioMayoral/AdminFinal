const Sequelize = require("sequelize")

const sequelize = new Sequelize('finalDB', 'user4', 'root', {
    dialect: 'mysql',
    host: '54.198.161.35',
    define: {
        timestamp: false,
        freezeTableName: true
    }
})


const modelDefiners = [
    require("../models/vacante_candidato"),
    require("../models/candidato"),
    require("../models/cliente"),
    require("../models/vacante"),
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

module.exports = sequelize