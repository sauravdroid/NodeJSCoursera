var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hostname = 'localhost';
var port = 8000;

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',function(req,res,next){
    res.writeHead(200,{"Content-Type":"text/plain"});
    next();
});
app.get('/dishes',function(req,res,next){
    res.end('Will Send all the dishes to you');
});
app.post('/dishes',function(req,res,next){
    res.end('Will add the dish '+req.body.name + ' --> ' +req.body.description);
});
 
app.delete('/dishes',function(req,res,next){
    res.end("Deleting all dishes");
});

app.get('/dishes/:dishId',function(req,res,next){
    res.end("Will send the details of dish " + req.params.dishId + ' to you');
});

app.delete('/dishes/:dishId',function(req,res,next){
    res.end("Deleting the dish with " + req.params.dishId);
});
app.use(express.static(__dirname + '/public'));


app.listen(port,hostname,function(){
    console.log(`Server started at http://${hostname}:${port}`);``
});