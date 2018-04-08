'use strict';
var even_asc_odd_desc = function(collection){
//  var i=0;
//  var j=collection.length-1;
  var i=0;
  var j=0;
  var tempEven = []; //偶数
  var tempOdd = [];

  for(var varible of collection){
    if(varible %2 == 0){
      tempEven[i++] = varible;
    }
    else{
      tempOdd[j++] = varible;
    }
  }

  function funSortEven(a,b){
    return a-b;
  }
  function funSortOdd(a,b){
    return b-a;
  }
  tempEven.sort(funSortEven);
  tempOdd.sort(funSortOdd);
  var temp = tempEven.concat(tempOdd);
  return temp;
};
module.exports = even_asc_odd_desc;
