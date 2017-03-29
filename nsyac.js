var c=0;
function add(){
  console.log(c);
}
function init(callBack){
  setTimeout(function(){
    c+=1;
    callBack()
  },100)

}
init(add);
