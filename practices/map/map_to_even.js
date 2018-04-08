'use strict';
function map_to_even(collection){
  return collection.map(function(x){
    return x*=2;
  });
//  return [2,4,6,8,10];
}
module.exports = map_to_even;
