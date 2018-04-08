'use strict';
var map_to_four_multiples_add_one = function(collection){
  return collection.map(function(x){
    return x*4+1;
  })

  //return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;
