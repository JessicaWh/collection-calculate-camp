'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
//  var collection=[];
  for(var i=0;i<collection_b.length;i++){
    for(var j=0;j<collection_a.length;j++){
      if(collection_b[i]==collection_a[j]){
        break;
      }
    }
    if(j==collection_a.length){
      collection_a.push(collection_b[i]);
    }
  }
  return collection_a;
}

module.exports = get_union;
