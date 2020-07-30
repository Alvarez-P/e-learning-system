/**
 * @function handleErrors 
 * @description Middleware para manejo de errores de rutas
 * @param {Object} err - error en la peticion
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
const handleErrors = (err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        res.status(400).json({
          message: err.error.toString()
        });
    } else {
        const { code, message } = err 
        res.status(code).send({ error: message })
    }
}

module.exports = { handleErrors }