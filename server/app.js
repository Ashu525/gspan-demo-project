const express = require('express');

const app = express()

app.use('/', (req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req, res) => {
    res.json({msg:"Hello world"})
})

app.listen(3001, (err) => {
    console.log("Listening on 3001")
})