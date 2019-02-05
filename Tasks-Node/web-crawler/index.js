var express = require('express');
var app = express();
var ajaxRequest = require('request');
var cheerio = require('cheerio');

app.get('/webCrawler',(request,response)=>{

    var pageUrl = request.query.url;
    var baseUrlHostName = new URL(pageUrl).hostname;
    var result = [];
    ajaxRequest(pageUrl,(err,res,body)=>{
        if(err){
            response.send("Error in fetching page");
        }
        if(res.statusCode == 200){
            var pageBody = cheerio.load(body);
            var pageHrefs = pageBody("a[href^='https']");
            pageHrefs.map((i,item)=>{
                if(new URL(pageBody(item).attr('href')).hostname == baseUrlHostName){
                    result.push(pageBody(item).attr('href'));
                }
                if(i == pageHrefs.length-1){
                    response.send({urls:result});
                }
            })
        }
        else{
            response.send("Error in fetching page")
        }
    })
})

app.listen(3001);

module.exports = app;