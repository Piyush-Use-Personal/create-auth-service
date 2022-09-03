const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

app.use(express.json())
app.use('/api', routes)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({
        error: err.message,
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})