const Sequelize = require('sequelize')
const { validate } = require('../utils/database')
const candidato = (sequelize)=>{
    sequelize.define('candidato', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        correo:{
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        escolaridad:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        carrera:{
            type: Sequelize.STRING,
            allowNull: true,
        },
        requisitos:{
            type: Sequelize.STRING,
            allowNull: true,
        },
        cursos:{
            type: Sequelize.STRING,
            allowNull: true,
        }
    })
}
module.exports = candidato