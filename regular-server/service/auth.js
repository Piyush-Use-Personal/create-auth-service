const axios = require("axios");

class AuthServiceGenerator {
    constructor(API_KEY) {
        const baseURL = 'http://localhost:3000/api'
        this.axios = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                api_key: API_KEY
            }
        })
    }

    login(id, name) {
        return this.axios.post('/login', {
            payload: {
                id,
                name,
            }
        })
    }

    verify(authorization){
        return this.axios.get('/verify', {
            headers: {
                authorization
            }
        })
    }
}

module.exports = AuthServiceGenerator