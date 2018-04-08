'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var temp = collection.filter(function (elem) {
    if(elem % 2 != 0){
      return elem;
    }
  });

  return  temp.reduce(function (x,y) {
    return x+y;
  })/temp.length;

}

module.exports = average_uneven;
