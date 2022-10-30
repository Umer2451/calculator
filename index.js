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

app.get('/add', (req, res) => {

function add() {

  prompt.start();
  
  prompt.get(["num1", "num2"], 
  function (err, res) {
    if (err) {
      console.log(err);
    } else {

      var sum = parseFloat(res.num1) 
        + parseFloat(res.num2);
      console.log("Sum of " + res.num1 
        + " and " + res.num2 + " is " + sum);
    }
  });
}
  
// Calling add function
add();
})

app.get('/subtract', (req, res) => {

  function sub() {
  
    prompt.start();
    
    prompt.get(["num1", "num2"], 
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
  
        var subtract = parseFloat(res.num1) 
          - parseFloat(res.num2);
        console.log("Subtraction of " + res.num1 
          + " and " + res.num2 + " is " + subtract);
      }
    });
  }
    
  // Calling add function
  sub();
  })

app.get('/multiply', (req,res) => {
  function multiply() {
  
    prompt.start();
    
    prompt.get(["num1", "num2"], 
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
  
        var multi = parseFloat(res.num1) 
          * parseFloat(res.num2);
        console.log("multiplication of " + res.num1 
          + " and " + res.num2 + " is " + multi);
      }
    });
  }
    
  // Calling add function
  multiply();

})

app.get('/divide', (req,res) => {
  function divide() {
  
    prompt.start();
    
    prompt.get(["num1", "num2"], 
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
  
        var div = parseFloat(res.num1) 
          / parseFloat(res.num2);
        console.log("division of " + res.num1 
          + " and " + res.num2 + " is " + div);
      }
    });
  }
    
  // Calling add function
  divide();

})

app.get('/triangle', (req,res) => {
  function tri() {
  
    prompt.start();
    
    prompt.get(["base", "height"], 
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
  
        var area = 0.5* parseFloat(res.base) 
          * parseFloat(res.height);
        console.log("base of " + res.base 
          + " and height of" + res.height + " and area is " + area);
      }
    });
  }
    
  // Calling add function
  tri();

})
app.get('/rectangle', (req,res) => {
  function rectang() {
  
    prompt.start();
    
    prompt.get(["length", "width"], 
    function (err, res) {
      if (err) {
        console.log(err);
      } else {
  
        var rect = parseFloat(res.length) 
          * parseFloat(res.width);
        console.log("length of " + res.length
          + " and width of" + res.width + " and area is " + rect);
      }
    });
  }
    
  // Calling add function
  rectang();

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

// if the number is odd
      else {
        console.log("The number is odd.");
        } 

        }
    });
  }
    
  // Calling add function
  evenorodd();

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //check which port the app is using
}) // to run this type localhost:3000