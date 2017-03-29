  var fs=require('fs');

  fs.open('1.txt','r+',function(err,fd){

     if(err){

       console.log('文件打开失败');

     }else{
            var bf=new Buffer('567');
            fs.write(fd,bf,0,3,1,function(){
            console.log(arguments);
         })

     }
  })