const Sequelize = require('sequelize')

const cliente = (sequelize)=>{
    sequelize.define('cliente',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        empresa: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        correo: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
}
module.exports = cliente