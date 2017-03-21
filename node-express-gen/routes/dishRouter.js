var express = require('express');
var bodyParser = require('body-parser');
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Will fetch you all the dishes");
    next();
})
.post(function(req,res,next){
    res.end(req.body.name + " --> "+req.body.description);
});

dishRouter.route('/:dishId')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/html'});
    next();
})
.get(function(req,res,next){
    res.end("Will fetch you the details of dish "+req.params.dishId);
});
module.exports = dishRouter;