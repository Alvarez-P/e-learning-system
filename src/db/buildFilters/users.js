const Sequelize = require('sequelize')
const Op = Sequelize.Op

/**
 * @function buildUserFilters
 * @description Función que recibe las querys predeterminadas y las dadas por el usuario.
 * @param {Object} query, contiene los parámetros rol, offset, limit y active en caso de ser falso.
 * @param {Object} next, almacena los errores posibles.
 */

const buildUserFilters = (query, next) => {
    try {
        let { offset = 0, limit = 20, active = true } = query;
        const filters = {}
        filters.UserActive = {
            [Op.eq]: active
        }
        if (query.rol) filters.UserRol = {
            [Op.eq]: query.rol
        }
        return {
            offset,
            limit,
            filters
        }
    } catch (error) {
        next(error)
    }

}

module.exports = {
    buildUserFilters
}