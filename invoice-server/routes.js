const { Router } = require('express')
const verifyAuthentication = require('./middleware/auth')

const router = Router()

class Invoice {
    constructor(){
        this.name = new Date()
    }
    toJSON(){
        return {
            name: this.name
        }
    }
}

router.post('/invoice', verifyAuthentication, (req, res) => {
    const invoice = new Invoice()
    //////......
    res.json(invoice.toJSON)
})

module.exports = router