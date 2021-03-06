require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const { initDB } = require('./db/init-db')
const app = express()
const port = process.env.HOST || 8000

app.use(cors())
routes(app)
initDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.listen(port, () => {
    console.log(`Express is now up running on port ${port}`)
})
