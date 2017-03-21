var express = require('express');
var morgan = require('morgan');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');
var port = 3000;
var host = 'localhost';
var app = express();
app.use(morgan('dev'));
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
app.listen(port,host,function(){
    console.log("Server started at "+port);
});