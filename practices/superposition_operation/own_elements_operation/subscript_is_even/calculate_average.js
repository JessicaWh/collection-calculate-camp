'use strict';
var calculate_average = function(collection){
  var sum = 0;
  var total = 0;
  for(var i=0; i<collection.length; i++){
    if(collection[i] % 2 ==0){
      sum += collection[i];
      total++;
    }
  }
  return sum/total;
};
module.exports = calculate_average;
