require('dotenv').config()
const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require("cors")

const PORT =  5000
const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('Hello, World!')
})

server.use('/ai', aiRoutes)
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

