'use strict';
var number_map_to_word = function(collection){
  var str_collection = [''];
  for (var i = 97; i < 102; i++) {
    str_collection.push(String.fromCharCode(i));
  }
  return collection.map(function(element){
     return str_collection[element%26];
  });

//  return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
