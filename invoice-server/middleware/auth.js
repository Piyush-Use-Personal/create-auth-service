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
/**
 * db1 user db2 authors
 * microservices
    * auth - db1.User, db2.Authors
    * stripe - db1.Transaction, db1.fallback, db1.webhook, db1.jobs - [failed transactions -> resolve - success or fail]
        * socket.io
            - transaction_received
            - transaction-init
            - waiting    
    * regular - subscription, purchase, messages
        * socket.io 
            - typing
            - sent
            - received  
 * 
 * user login - auth
 * user token - auth
 * user subscription - regular
 * user purchase - regular
    * stripe server - status: payment_gateway_pending transaction
 * stripe webhook
 * redirect user purchase - x
 * transaction
 * commit transaction
 */


/**
 * mono - 24$
 * 
    single server and different port - 24$
        - ssh
        - deploy
    24$ - 2 port
        = 48$
    
    different containers for different service - 8$
        3 * 8$
            = 24$
        4 * 8$
            = 32$
 */

module.exports = verifyAuthentication