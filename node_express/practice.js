var express = require('express');
var http = require('http');
var port = 3000;
var hostname = 'localhost';
var app = express();
app.use(function(req,res,next){
    console.log(req.headers);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('This is a server running on nodejs runtime');
});
var server = http.createServer(app);
server.listen(port,hostname,function(){
    console.log("Server started in port "+port);
})