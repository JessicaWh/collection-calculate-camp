'use strict';
var calculate_median = function(collection){
  var temp = collection.filter(function (elem) {
    if(elem % 2==0){
      return elem;
    }
  });
  if(temp.length % 2 == 0){
    return (temp[temp.length/2]+temp[temp.length/2-1])/2;
  }
  else {
    return temp[Math.floor(temp.length/2)];
  }
  return temp;
};

module.exports = calculate_median;
