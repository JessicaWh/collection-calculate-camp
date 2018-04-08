'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var temp = collection.filter(function (element) {
    if(element % 2 != 0){
      return element;
    }
  });

  return temp.map(function (elem) {
    return elem*3+2;
  });
}

module.exports = hybrid_operation_to_uneven;

