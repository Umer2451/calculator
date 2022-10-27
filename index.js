const express = require('express') //require which dependency
const { deflate } = require('zlib')
const app = express() //app using express function
const port = 3000 //what port to use

const path = require('path')
const res = require('express/lib/response')
const prompt = require("prompt");

app.get('/users', (req, res) => { //request = req, and res = response
  res.send('Hello Umer! Im WORKING fine') //send request.
})

app.get('/evenorodd', (req,res) => {
  function evenorodd() {
  
    prompt.start();
    
    prompt.get(["num"], 
    function (err, res) {
      if (err) {
        console.log(err);
      } else {

      if(res.num % 2 == 0) {
        console.log("The number is even.");
        }

// if the number is odd :##
      else {
        console.log("The number is odd.");
        } 
        }
    });
  }
  evenorodd();

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //check which port the app is using
}) // to run this type localhost:3000

