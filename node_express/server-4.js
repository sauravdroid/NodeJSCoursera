var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hostname = 'localhost';
var port = 8000;

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

var dishRouter = express.Router();
dishRouter.use(bodyParser.json()); //Mini express application
dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Will Send all the dishes to you");
})
.post(function(req,res,next){
    res.end("Will add the dish with name "+req.body.name + " With details " + req.body.description);
})
.delete(function(req,res,next){
    res.end("Will delete all the dishes");
});

dishRouter.route('/:dishId')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Will get the details of dish with id "+req.params.dishId);
})
.put(function(req,res,next){
    res.end("Will update the dish with id " + req.params.dishId);
})
.delete(function(req,res,next){
    res.end("Saurav Biswas Will delete the dish with id " + req.params.dishId);
});

app.use('/dishes',dishRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function(){
    console.log(`Server started at http://${hostname}:${port}`);``
});