var express = require('express');
var app = express();

app.get('/giveProduct',(req,res)=>{
   let product = req.query.input1*req.query.input2;
   res.send({product:product});
})

app.listen(3001);

module.exports = app;