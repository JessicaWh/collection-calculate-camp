'use strict';
var even_group_calculate_average = function(collection){
  var oddth=[];
  //第偶数个元素
  var oneSum=0,oneTotal=0;
  var twoSum=0,twoTotal=0;
  var threeSum=0,threeTotal=0;
  var result = [];
  for (var i=0 ; i<collection.length; i++) {
    if(i%2 !=0 ){
      oddth.push(collection[i]);
    }
  }
  var odd = oddth.filter(function (element){
    if(element % 2 == 0){
      return element;
    }
  });

  if(odd.length == 0){
    result.push(0);
    return result;
  }
  else{
    for(var i=0; i<odd.length; i++){
      if(Math.floor(odd[i]/10) == 0){
        oneSum += odd[i];
        oneTotal += 1;
      }
      else if (Math.floor(odd[i]/10) < 10) {

        twoSum += odd[i];
        twoTotal += 1;
      }
      else if(Math.floor(odd[i]/100) < 10){
        threeSum += odd[i];
        threeTotal += 1;
      }
    }
  }

  if(oneTotal != 0 && twoTotal != 0 && threeTotal !=0){
    result.push(oneSum/oneTotal);
    result.push(twoSum/twoTotal);
    result.push(threeSum/threeTotal);
  }
  if(oneTotal == 0 && twoTotal == 0 && threeTotal !=0){
    result.push(threeSum/threeTotal);
  }

  return result;
}
module.exports = even_group_calculate_average;
