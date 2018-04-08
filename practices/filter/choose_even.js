'use strict';

function isEven(element) {
     return element%2==0 ;
}

function choose_even(collection) {
  //在这里写入代码
  var filterd = collection.filter(isEven);
  return filterd;
}

module.exports = choose_even;
