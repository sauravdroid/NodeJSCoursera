'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');
var host = 'localhost';
var port = '3001';
var fileUrl , filePath , fileExt;
var server = http.createServer(function(req,res){
  if(req.method == 'GET'){
    // sendRequestString(res,200,"<h1>This is a get request</h1>");
    if(req.url === '/'){
      fileUrl = '/index.html';
      //sendRequestString(res,200,fileUrl);
    }else{
      fileUrl = req.url;
      //sendRequestString(res,200,fileUrl);
    }
    filePath = path.resolve('./public'+fileUrl);
    fileExt = path.extname(filePath);
    if(fileExt!=='.html'){
      sendRequestString(res,400,"<h1>Only html file supported</h1>");
    }else{
      fs.exists(filePath,function(exists){
        if(!exists){
          sendRequestString(res,400,"<h1>Error 404 File Not Found</h1>");
          return;
        }else{
          res.writeHead(200,{'Conten-Type':'text/html'});
          fs.createReadStream(filePath).pipe(res);
        }
      });
    }
  }else{
    sendRequestString(res,400,"<h1>This is not a get request</h1>");
  }
});
server.listen(port,host,function(){
  console.log(`Server started at http://${host}:${port}`);
});

function sendRequestString(res,status,body){
  res.writeHead(status,{'Content-Type':'text/html'});
  res.end(body);
}