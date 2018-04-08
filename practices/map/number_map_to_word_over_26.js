'use strict';
var number_map_to_word_over_26 = function(collection){
    var str_collection = [''];
    for (var i = 97; i < 123; i++) {
      str_collection.push(String.fromCharCode(i));
    }
    return collection.map(function(element){
      if(element%26==0){
        return str_collection[element/26-1]+str_collection[26];
      }
      else{
        return str_collection[Math.floor(element/26)]+str_collection[element%26];
      }
  });


//  return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
