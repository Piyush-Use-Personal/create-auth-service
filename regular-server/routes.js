const { Router } = require('express')
const verifyAuthentication = require('./middleware/auth')
const { invoiceService } = require('./service')

const router = Router()

router.get('/', verifyAuthentication, (req, res) => res.json({ message: 'success' }))
router.get('/purchase', verifyAuthentication, async (req, res) => {
    const user = req.context.user
    const invoice = await invoiceService.generateInvoice(user) // 3s
    res.json(invoice)
})

module.exports = router