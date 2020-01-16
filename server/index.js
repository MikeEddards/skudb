require('dotenv').config()
const express = require('express')

const {PORT} = process.env

const app = express()
app.use(express.json())

app.listen(PORT, () => console.log(`All ears on port: ${PORT}`))