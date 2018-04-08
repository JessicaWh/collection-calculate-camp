'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  function funcSort(a,b){
    return a-b;
  }
  var temp = collection.sort(funcSort);
  var value;
  for(var i=0;i<temp.length-3; i+=3){
    value = temp[i];
    temp[i] = temp[i+1];
    temp[i+1] = temp[i+2];
    temp[i+2] = value;
  }
  return temp;
}
module.exports = rank_by_two_large_one_small;
