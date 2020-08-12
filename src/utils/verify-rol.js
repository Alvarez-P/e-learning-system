require('dotenv').config()
const { HttpError } = require("./HttpError")
const { SECRET } = process.env

const getToken = ({ headers, next}) => {
    try {
        let TOKEN 
        if (headers.authorization){
            const headerSplit = headers.authorization.split(' ')
            if(headerSplit.length > 1) {
                TOKEN = headerSplit[1]
                return { TOKEN, next }
            }
            else throw new HttpError('Invalid Authorization Header', 400)
        }
        else throw new HttpError('Authorization Header is needed', 400)
    } catch (error) {
        next(error)
    }    
}

const getRol = ({ TOKEN, next }) => {
    try {
        let requestRol = "user"
        // jwt.verify(token, SECRET, function(err, decoded) {
        //     if (err) console.log(err); // throw new HttpError(err) 
        //     requestRol = decoded.rol 
        // });
        return { requestRol, next }
    } catch (error) {
        next(error)
    }
}

const validateRol = allowed => ({ requestRol, next }) => {
    try {
        if (allowed.indexOf(requestRol) > -1) next()
        else throw new HttpError('Permission denied for role', 401)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    getToken,
    getRol,
    validateRol
} 