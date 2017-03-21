var express = require('express');
var bodyParser = require('body-parser');
var promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end('Will fetch all the promotions for you dear');
})
.post(function(req,res,next){
    res.end(req.body.name +" <--> "+req.body.description);
});

promoRouter.route('/:dishId')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Will fetch you all the details of promotion "+req.params.dishId);
});
module.exports = promoRouter;