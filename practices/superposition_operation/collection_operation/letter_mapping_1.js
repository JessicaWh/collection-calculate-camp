'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var res=[];
  var str=[];
  for(var i=97; i<123; i++){
    str.push(String.fromCharCode(i));
  }
  collection.map(function (element,index,arr) {
    if(element % 2 == 0){
      res.push(str[index]);
    }
  });

   return res;
}

module.exports = even_to_letter;
