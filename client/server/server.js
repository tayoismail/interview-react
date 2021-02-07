const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const teachersRoutes = require('./routes/teachersRoutes')
const studentsRoutes = require('./routes/studentsRoutes')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.use(cors())
app.use(express.json())

app.use('/teachers', teachersRoutes)
app.use('/students', studentsRoutes)

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})