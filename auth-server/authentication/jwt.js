const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = 'gfg_jwt_secret_key'

const createToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET_KEY)
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY)
}

module.exports = {
    createToken,
    verifyToken
}