const dummyApiKeys = [{
    api_key: '7sja83nas34k833',
    user: {
        name: 'test',
    }
}]

const apiKeyVerification = (req, res, next) => {
    const api_key = req.headers.api_key
    if(!api_key) throw new Error('No API-KEY Present')
    const hasKey = dummyApiKeys.find(key => key.api_key == api_key)
    if(hasKey){
        next()
    } else {
        throw new Error('Invalid API-KEY')
    }
}

module.exports = apiKeyVerification