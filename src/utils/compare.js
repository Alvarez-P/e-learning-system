const bcrypt = require('bcrypt')
    /**
     * Función que compara la contraseña del usuario. Contraseña almacenada en la base de datos con la contraseña del body.
     */
module.exports = {
    matchPassword: async function matchPassword(hash, password) {
        return bcrypt.compare(password, hash)
    }
}