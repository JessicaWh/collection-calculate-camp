'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collection=[];
  var str_collection = [''];
  for (var i = 97; i < 102; i++) {
    str_collection.push(String.fromCharCode(i));
  }
  if(number_a == number_b){
    collection.push(str_collection[number_a]);
  }
  else{
    var min = number_a<number_b?number_a:number_b;
    var max = number_a>number_b?number_a:number_b;
    if(min==number_a){
      for(var i = min;i<=max;i++){
          collection.push(str_collection[i]);
        }
    }
    else{
      for(var i = max;i>=min;i--){
          collection.push(str_collection[i]);
      }
    }
  }
  return collection;
}

module.exports = get_letter_interval;
