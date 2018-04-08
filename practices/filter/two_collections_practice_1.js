'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  
  var result = collection_a.filter(function(x){
      for(var i=0;i<collection_b.length;i++){
        if(collection_b[i]==x){
          return x;
        }
      }
  });
  return result;
}

module.exports = choose_common_elements;
