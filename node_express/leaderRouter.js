var express = require('express');
var bodyParser = require('body-parser');
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("Will fetch you all the leader information");
})
.post(function(req,res,next){
    res.end("Leader: "+req.body.name + " --- " + req.body.description);
});

leaderRouter.route('/:leaderId')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/html'});
    next();
})
.get(function(req,res,next){
    res.end("Will fetch you the detail of the leader of "+req.params.leaderId);
});

module.exports = leaderRouter;