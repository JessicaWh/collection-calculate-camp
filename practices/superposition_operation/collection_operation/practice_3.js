'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var temp  = collection.filter(function (element) {
    if(element % 2 != 0){
      return element;
    }
  });

  var res = temp.map(function (elem) {
    return elem*3+5;
  });

  return res.reduce(function (x,y) {
    return x+y;
  });
}

module.exports = hybrid_operation_to_uneven;

