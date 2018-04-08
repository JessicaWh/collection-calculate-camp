'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var temp = collection.map(function (elem) {
    return elem*3+2;
  });
  return temp.reduce(function (x,y) {
    return x+y;
  });
}

module.exports = hybrid_operation;

