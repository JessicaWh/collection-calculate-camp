'use strict';

function compute_median(collection) {
  //在这里写入代码
  //长度为偶数
  var result ;
  function sortCollection(a,b){
    return a-b;
  }
  var newCollection = collection.sort(sortCollection);
  if(newCollection.length%2==0){
    result = (newCollection[newCollection.length/2]+collection[newCollection.length/2-1])/2;
  }
  //长度为奇数
  else{
      result = newCollection[(newCollection.length-1)/2];
  }
  return result;
}

module.exports = compute_median;
