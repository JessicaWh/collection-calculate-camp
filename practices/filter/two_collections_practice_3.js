'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码

  var result = collection_a.filter(function(x){
    for(var i=0;i<collection_b.length;i++){
      if(x%collection_b[i]==0){
        return true;
      }
    }
  });
  return result;
}

module.exports = choose_divisible_integer;
