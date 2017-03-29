var http=require('http');
http.createServer(function(rep,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.end('Hello 222Worl22222d\n')
}).listen(1398,'127.0.0.1');
console.log('http://127.0.0.1:1398/')