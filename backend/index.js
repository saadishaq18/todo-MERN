const express = require('express')
const { handleDbConnect } = require('./config/dbConfig')
const Routes = require('./routes/index')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5001


const dbUrl = `mongodb://localhost:27017/${process.env.DATABASE}`

handleDbConnect(dbUrl).then(()=>{
    console.log("Database connected")
})

app.use(express.json())

//routes
app.use('/api', Routes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
