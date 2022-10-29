const express = require('express') //require which dependency
const { deflate } = require('zlib')
const app = express() //app using express function
const port = 3000 //what port to use

const prompt = require('prompt-sync')();


const path = require('path')

app.get('/users', (req, res) => { //request = req, and res = response
  res.send('Hello Umer! Im WORKING fine') //send request.
})

// Addition Operation API
app.get('/add', (req, res) => {
  const number1 = parseInt(prompt('Enter first number?'));
  const number2 =parseInt(prompt('Enter second number?'));
  sum=number1+number2;
  console.log(sum)
res.send("Answer="+sum+"")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //check which port the app is using
}) // to run this type localhost:3000

