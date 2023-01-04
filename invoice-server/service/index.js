const AuthServiceGenerator = require("./auth");
const AuthServiceAPIKey = '7sja83nas34k833'

module.exports = {
    authService: new AuthServiceGenerator(AuthServiceAPIKey)
}