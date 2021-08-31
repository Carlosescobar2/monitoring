const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: 'cd02ad81753a4778a0e9d4bcebd6928e',
    captureUncaught: true,
    captureUnhandledRejections:true
})
    

const app = express()

app.get('/', (req,res)=> { 
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('HTML file served successfully')
})

const port = process.env.PORT || 4545


app.listen(port, () => console.log("Take us to port 4545"))