const Sequelize = require('sequelize')
const { validate } = require('../utils/database')
const vacante = (sequelize)=>{
    sequelize.define('vacante', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_empresa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: 'cliente',
                key: 'id'
            }
        },
        remuneracion:{
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
        cantidad:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        requisitos:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    })
}
module.exports = vacante