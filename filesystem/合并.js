
 var fs=require('fs');

 var filedir='./ablert/source/';


fs.watch(filedir,function(ev,file){

   fs.readdir(filedir,function(err,list){

        var attr=[];

        list.forEach(function(f){

            if(f){

              var info=fs.statSync(filedir+'/'+f);

              //console.log(info);

              if(info.mode==33206){
                attr.push(filedir+'/'+f)
              }
            }
        })
        var str1='';

        attr.forEach(function(f) {

            var t = fs.readFileSync( f );
            //str1 += t.toString() + '\n';
            ///console.log(t.toString());
            str1 += t.toString() + '\n';

        });
      fs.writeFile('./ablert/js/index.js',str1)

   })



})