var fs=require('fs');

fs.open('1.txt','r',function(err,fd){

  var bf=new Buffer(10);

  fs.read(fd,bf,1/*起始位*/,4/*偏移量*/,null,function(err,len,newBf){
    console.log(len)
    console.log(newBf)
  })

})

