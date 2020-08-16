const { generateToken } = require('../utils/token')

// OBJECTS THAT REPRESENT DUMMY INFORMATION
const data = {
    UserEmail: "email@gmail.com",
    UserPassword: "elsys2020",
    UserRol: "admin"
}
const TOKEN = generateToken(data, 10)

module.exports ={
    TOKEN
} 