'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var twoCollectionConcat = collection_a.concat(collection_b);
  twoCollectionConcat.sort();
  for(var i=1;i<twoCollectionConcat.length;){
    if(twoCollectionConcat[i] === twoCollectionConcat[i-1]){
      i+=2;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = compare_collections;
