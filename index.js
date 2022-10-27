const express = require('express') //require which dependency
const { deflate } = require('zlib')
const app = express() //app using express function
const port = 3000 //what port to use

const path = require('path')

app.get('/users', (req, res) => { //request = req, and res = response
  res.send('Hello Umer! Im WORKING fine') //send request.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //check which port the app is using
}) // to run this type localhost:3000

