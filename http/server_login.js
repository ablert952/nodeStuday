var http=require('http');
var url=require('url');;
var fs=require('fs');
var querystring=require('querystring');
var server=http.createServer();

var filname=__dirname+'/ablert/';
server.on('request',function(req,res){
    //console.log('有用户来了');
    var urlSer=url.parse(req.url)
    //console.log(urlSer);
    switch(urlSer.pathname){
      case '/':
       sendData(filname+'index.html',req,res);
       break;
      case '/user':
       sendData(filname+'user.html',req,res);
       break;
      case '/404':
       sendData(filname+'404.html',req,res);
       break;
      case '/login':
       sendData(filname+'login.html',req,res);
       break;
       case '/login/check':
       //sendData(filname+'login.html',req,res)
       //console.log(req.method);
        if(req.method.toUpperCase()=='POST'){
          var str='';
          req.on('data',function(chunk){
               str+=chunk;
          })
          req.on('end',function(){
             console.log(querystring.parse(str));
          })
        }
       break;
       default:
         sendData(filname+'404.html',req,res);
        break;
    }

})
function sendData(file,req,res){
 fs.readFile(file,function(err,data){
    if(err){
       res.writeHead(404,{
          'content-type':'text/html;charset=utf-8'
       })
       res.end('<h1>页面被外星人劫持掉了</h1>');
    }else{
      res.writeHead(200,{
          'content-type':'text/html;charset=utf-8'
       })
       res.end(data);
    }
 })
}
server.listen('8070','localhost');