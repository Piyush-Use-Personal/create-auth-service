const { Router } = require('express')
const { createToken, verifyToken } = require('./authentication/jwt')
const apiKeyVerification = require('./middleware/api_key')

const router = Router()

router.post('/login', apiKeyVerification, (req, res) => {
    const { payload } = req.body
    // verify is payload is correct
    const token = createToken(payload)
    // register
    // login details
    res.json({ token })
})

router.get('/verify', apiKeyVerification, (req, res) => {
    const token = req.headers.authorization
    const verified = verifyToken(token)
    res.json({ verified })
})

module.exports = router