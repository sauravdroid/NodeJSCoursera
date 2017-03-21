var http = require('http');
var fs= require('fs');
var path = require('path');
var port = 3000,hostname = 'localhost';
var fileUrl , filePath, fileExt;
var server = http.createServer(function(req,res){
    if(req.method == 'GET'){
        if(req.url == '/'){
            fileUrl = '/index.html';
        }else{
            fileUrl = req.url;
        }
        filePath = path.resolve('./public'+fileUrl);
        fileExt = path.extname(filePath);
        if(fileExt !== '.html'){
            res.writeHead(500,'"Content-Type":"text/html"');
            res.end("<h1>Only HTML file supported</h1>")
        }else{
            fs.exists(filePath,function(exists){
                if(!exists){
                    res.writeHead(404,'"Content-Type":"text/html"');
                    res.end("<h1>File not found error</h1>");
                    return;
                }else{
                    res.writeHead(200,'"Content-Type":"text/html"');
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        }
    }else{
        res.writeHead(500,'"Content-Type":"text/html"');
        res.end("<h1>Only get method supported</h1>")
    }
});
server.listen(port,hostname,function(){
    console.log(`Server started at http://${hostname}:${port}`);
})