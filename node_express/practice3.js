var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = 3000;
var hostname = 'localhost';
var app= express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/dishes',function(req,res,next){
    console.log(req.headers);
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
});
app.get('/dishes',function(req,res,next){
    res.end('Will get all the dishes to you , Hello World');
});
app.post('/dishes',function(req,res,next){
    res.end(req.body.name + " " + req.body.description);
});
app.listen(port,hostname,function(){
    console.log("Server started at "+port);
})