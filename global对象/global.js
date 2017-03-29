setInterval(function(){

  var nowTime=new Date()
  console.log('现在是'+nowTime.getFullYear()+'年'+(nowTime.getMonth()+1)+'月'+
   nowTime.getDate()+'日'+nowTime.getHours()+'时'+nowTime.getMinutes()+'分'+nowTime.
   getSeconds()+'秒')
},1000)