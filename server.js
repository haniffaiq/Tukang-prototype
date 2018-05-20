const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require('./routes/api')

app.get('/', (req, res) =>{
    res.send(JSON)
    res.end()
})

app.use(bodyParser.json())
//this route same like app.get()
app.use('/api', route)

app.listen(5000, () =>{
    console.log("Server is running on port 3000")
})

