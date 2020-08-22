const { User } = require('../models/index')
const { HttpError } = require('../../utils/HttpError')
const { Op } = require('sequelize')

/**
 * @function addUserOnDB
 * @description Function to add Users on db
 * @param {Object} user - user object
 * @param {Function} next - Express middleware function
 */
const addUserOnDB = async(user, next) => {
    try {
        const res = await User.create(user)
        if (!res.dataValues) throw new HttpError()
        return res.dataValues
    } catch (error) {
        next(error)
    }
}

/**
 * @function getUserOnDB
 * @description Function to get Users on db
 * @param {Object} filters un objetos con los filtros de la base de datos. Por ejemplo: {UserActive: true} o {UserRol: admin}
 * @param {Function} next - Express middleware function
 * @return Devuelve una lista de usuarios
 */

const getUserOnDB = async(filters, next) => {
    try {
        const listUsers = await User.findAll({ where: filters })
        if (!listUsers) throw new HttpError()
        return listUsers
    } catch (error) {
        next(error)
    }
}

/**
 * @function deleteAllUsersOnDB
 * @description Function to delete Users on db, unicamente para los tests
 * @param {Object} filters un objetos con los filtros de la base de datos. Por ejemplo: {UserActive: true} o {UserRol: admin}
 * @param {Function} next - Express middleware function
 * @return Devuelve una lista de usuarios
 */
const deleteAllUsersOnDB = async() => {
    try {
        await User.destroy({
            where: {
                UserID: {
                    [Op.not]: '995f46e9-f2cc-4c8e-9e1e-db5aec60c063'
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    addUserOnDB,
    getUserOnDB,
    deleteAllUsersOnDB
}