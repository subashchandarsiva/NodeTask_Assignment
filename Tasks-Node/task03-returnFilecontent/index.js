var express = require('express');
var app = express();
var fs = require('fs');

app.get('/readFile',(req,res)=>{
        
        fs.readFile('./data.json','utf-8',(err,data)=>{
            if(err){
                if(err.code == "ENOENT"){
                    res.send('File not found');
                }
                else{
                    res.send('Internal Server Error');
                }
            }
            else{
                res.send({data});
            }
        })
})

app.listen(3001);

module.exports = app;















