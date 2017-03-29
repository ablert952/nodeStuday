function cat(word){
  this.word=word;
  console.log(this)
  this.speaking=function(){
    console.log(this)
  }

}

var double=new cat('dog');
console.log(double);

