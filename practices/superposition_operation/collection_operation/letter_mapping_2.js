'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var str=[''];
  for(var i=97; i<123; i++){
    str.push(String.fromCharCode(i));
  }
  var sum = collection.reduce(function (x,y) {
    return x+y;
  });

  return str[Math.ceil(sum/collection.length)];
}

module.exports = average_to_letter;

