const { authService } = require("../service")

const verifyAuthentication = async (req, res, next) => {
    try {
        await authService.verify(req.headers.authorization)
        next()
    } catch (error) {
        res.status(401).send({ 
            message: 'unauthorized'
        })
    }
}

module.exports = verifyAuthentication