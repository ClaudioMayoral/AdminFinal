const Sequelize = require('sequelize')

const vacante_candidato = (sequelize)=>{
    sequelize.define('vacante_candidato', {
        id_vacante: {
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
            references: {
                model: 'vacante',
                key: 'id'
            }
        },
        id_candidato: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: 'candidato',
                key: 'id'
            }
        }
    })
}
module.exports = vacante_candidato