const express = require('express')
const route = express.Router()

route.get('/user', (req, res) =>{
    res.send({
        type: "GET",
        
    })
})

route.post('/user', (req, res) => {
    res.send({
        type: "POST ",
        username : req.body.username,
        password : req.body.password
    })

    console.log(req.body)
})

module.exports = route