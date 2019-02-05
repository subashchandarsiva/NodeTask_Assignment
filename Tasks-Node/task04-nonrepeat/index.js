var express = require('express');
var app = express();

app.get('/nonRepeatingCharacter',(req,res)=>{
    let text = req.query.input;
    let temp = text.split('');
    var flag = false;
    temp.map((character,i)=>{
        if(temp.indexOf(character) == i && temp.indexOf(character,i+1) == -1){
            flag = true;
            res.send({output:character});
        }
        if(i == temp.length-1 && !flag){
            res.send("No non-repeating character");
        }
    })
})

app.listen(3001);

module.exports = app;