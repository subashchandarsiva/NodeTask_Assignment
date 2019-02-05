var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/writeToFile',(req,res)=>{
    fs.writeFile("./data.json",JSON.stringify(req.body),function(err) {
        if(err) {
             res.send("Error Writing data to file");
        }
        res.send("Data written to file");
    }); 
})

app.listen(3001);

module.exports = app;