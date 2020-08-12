const { User } = require('../models/index')
const { HttpError } = require('../../utils/HttpError')

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
        const deleteUsers = await User.destroy({
            where: {},
            truncate: true
        })
        if (!deleteUsers) throw new HttpError()
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    addUserOnDB,
    getUserOnDB,
    deleteAllUsersOnDB
}