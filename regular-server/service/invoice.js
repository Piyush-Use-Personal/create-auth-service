const axios = require("axios");

class InvoiceServiceGenerator {
    constructor() {
        const baseURL = 'http://localhost:3002/api'
        this.axios = axios.create({
            baseURL,
            timeout: 10000,
        })
    }

    generateInvoice() {
        return this.axios.post('/invoice', {})
    }
}

module.exports = InvoiceServiceGenerator