'use strict';

function amount_even(collection) {

  //在这里写入代码
  var temp = collection.filter(function (elem) {
    if(elem % 2==0){
      return elem;
    }
  });
  var res = temp.reduce(function (x,y) {
      return x+y;
  });
  return res;
}

module.exports = amount_even;
