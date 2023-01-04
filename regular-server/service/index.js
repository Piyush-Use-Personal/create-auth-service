const AuthServiceGenerator = require("budweiser-auth");
const InvoiceServiceGenerator = require("./invoice");
const AuthServiceAPIKey = '7sja83nas34k833'

module.exports = {
    authService: new AuthServiceGenerator(AuthServiceAPIKey),
    invoiceService: new InvoiceServiceGenerator()
}