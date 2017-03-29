
var http=require('http');


var server=http.createServer();

server.on('request',function(rep,res){

   console.log(res);
   console.log('有一个客户端请求了');

   res.writeHead(200,{'conten-type':'text/html;charset=utf-8'});

   res.write('<h1>hello,nodeJs</h1>');
   res.end();

})

server.listen(8090,'localhost');