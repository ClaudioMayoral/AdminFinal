function aplicarRelaciones(sequelize){
    const vacante_candidato = sequelize.models.vacante_candidato
    const cliente = sequelize.models.cliente
    const candidato = sequelize.models.candidato
    const vacante = sequelize.models.vacante


    vacante.belongsToMany(candidato, {through: vacante_candidato})
    candidato.belongsToMany(vacante, {through: vacante_candidato})

    vacante.belongsTo(cliente)
}

module.exports = {aplicarRelaciones}