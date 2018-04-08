'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码

    var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
    var collection_b = ["a", "d", "e", "f"];
  var result = collection_a.filter(function(x){
      for(var i=0;i<collection_b.length;i++){
        if(collection_b[i]==x){
          return false;
        }
      }
      if(i==collection_b.length){
        return true;
      }
  });
  return result;
}

module.exports = choose_no_common_elements;
