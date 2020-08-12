require('dotenv').config()
const { getUserOnDB } = require('../db/methods/users')
const { HttpError } = require('../utils/HttpError')
const { generateToken } = require('../utils/token')
const { matchPassword } = require('../utils/compare')

const { EXP_ACCESS_TOKEN = 15, EXP_REFRESH_TOKEN = 60 } = process.env

/**
 * @function auth
 * @description Controller for POST /api/auth
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @param {Function} next Recibe los errores
 */

async function auth(req, res, next) {
    try {
        let { UserEmail, UserPassword } = req.body
        let matchUser = await getUserOnDB({ UserEmail }, next)
        const match = await matchPassword(matchUser[0].dataValues.UserPassword, UserPassword)
        if (!match) throw new HttpError('Invalid credentials', 401)
        req.body.UserRol = matchUser[0].dataValues.UserRol
        const TOKEN_ACCESS = generateToken(req.body, EXP_ACCESS_TOKEN)
        const TOKEN_REFRESH = generateToken(req.body, EXP_REFRESH_TOKEN)
        res.status(201).send({
            access_token: TOKEN_ACCESS,
            refresh_token: TOKEN_REFRESH
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    auth
}