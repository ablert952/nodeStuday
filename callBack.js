function add(something){
  console.log(something);
}

function learn(callBack,something){
  something+='is cool~!';
  callBack(something);
}

//learn(add,'nodejs');
learn(function(something){
  console.log(something)
},'ablert');