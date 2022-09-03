const { Router } = require('express')
const verifyAuthentication = require('./middleware/auth')

const router = Router()

router.get('/', verifyAuthentication, (req, res) => res.json({ message: 'success' }))

module.exports = router