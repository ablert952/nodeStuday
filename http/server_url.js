var http=require('http');

var url=require('url');

var server=http.createServer();

server.on('request',function(req,res){
    //console.log('有用户来了');
    var urlSer=url.parse(req.url)
    console.log(urlSer);
    switch(urlSer.pathname){
        case '/':
        res.writeHead(200, {
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>这是首页</h1>');
        break;
        case '/user':
        res.writeHead(200,{
           'content-type':'text/html;charset=utf-8'})
        res.end('<h1>这是用户中心!</h1>');
        break;
        default:
        res.writeHead(404,{
           'content-type':'text/html;charset=utf-8'})
        res.end('<h1>该页面被外星人劫持了！</h1>');
    }

})

server.listen('8866','localhost');