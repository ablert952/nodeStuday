
var fileProduct={
   name:'ablert',
   fileList:[
     {
      name:'css',
      type:'dir'
     },
     {
      name:'js',
      type:'dir'
     },
     {
      name:'source',
      type:'dir'
     },
      {
      name:'image',
      type:'dir'
     },
     {
      name:'index.html',
      type:'file',
      content:'<html>\n\t<head>\n\t\t<title>\n\t\t</title>\n\t</head>\n<body>\n</body>\n</html>'
     }
   ]
}

var fs=require('fs');



var flildataName=fileProduct.name;

var fileList=fileProduct.fileList;
//console.log(fileList)
if(flildataName){
  fs.mkdirSync(flildataName);
}

if(fileList && fileList.forEach){

   fileList.forEach(function(f){

     var path=flildataName+'/'+f.name;

     var content=f.content || '';

      switch(f.type){

        case 'dir':
         fs.mkdirSync(path);
         break;
        case 'file':
         fs.writeFileSync(path,content);
         break;
        default:

      }
   })
}

