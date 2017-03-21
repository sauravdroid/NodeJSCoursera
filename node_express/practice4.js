var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = 3000;
var host = 'localhost';

var app = express();
app.use(morgan('dev'));
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log(req.headers);
    next();
})
.get(function(req,res,next){
    res.end('Will fetch you all the dishes');
});
app.use('/dishes',dishRouter);
app.listen(port,host,function(){
    console.log("Server started at port " + port);
})