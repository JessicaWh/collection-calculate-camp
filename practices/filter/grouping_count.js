'use strict';
var choose_no_repeat_number = require("../../practices/filter/choose_no_repeat_number.js");


function grouping_count(collection) {
  var no_repeat = choose_no_repeat_number(collection);//collection中不重复的数字存到no_repeat中
  var res={};
  var sum=[];
  for(var i=0;i<no_repeat.length;i++){
    sum.push(0);
  }
  collection.filter(function(element){
    for(var i=0;i<no_repeat.length;i++){
      if(no_repeat[i] == element){
        sum[no_repeat.indexOf(element)]+=1;
      }
    }
    return sum;
  });
  for(var i=0;i<no_repeat.length;i++){
    res[no_repeat[i]]=sum[i];
  }
  return res;
}

module.exports = grouping_count;
