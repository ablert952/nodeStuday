var fs=require('fs');
/*创建一个名字为5的文件夹*/
fs.mkdir('./5',function(){
  console.log(arguments);

})
/*删除一个名字为5的文件夹
fs.rmdir('./5',function(){
  console.log(arguments);
})*/
fs.readdir('../filesystem',function(err,list){
  // console.log(err);
      list.forEach(function(f){
       fs.stat(f,function(err,info){
         //console.log(arguments)
         switch(info.mode){
           case 33206:
              console.log('[文件夹]'+f);
              break;
           case 16822:
              console.log('[文件]'+f);
              break;
             default:
             console.log('[其他文件]'+f);
             break;
         }
       })
     })
   //
})