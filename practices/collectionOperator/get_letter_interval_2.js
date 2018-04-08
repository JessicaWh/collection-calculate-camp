'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection=[];
  var str_collection = [''];
  for (var i = 97; i < 123; i++) {
    str_collection.push(String.fromCharCode(i));
  }
  if(number_a == number_b){
    collection.push(str_collection[Math.floor(number_a/26)]+str_collection[number_a%26]);
  }
  else{
    var min = number_a<number_b?number_a:number_b;
    var max = number_a>number_b?number_a:number_b;
    if(min==number_a){
      for(var i = min;i<=max;i++){
        if(i%26==0){
          collection.push(str_collection[i/26-1]+str_collection[26]);
        }
        else{
          collection.push(str_collection[Math.floor(i/26)]+str_collection[i%26]);
        }
      }
    }
    else{
      for(var i = max;i>=min;i--){
        if(i%26==0){
          collection.push(str_collection[i/26-1]+str_collection[26]);
        }
        else{
          collection.push(str_collection[Math.floor(i/26)]+str_collection[i%26]);
        }
      }

    }
  }
  return collection;
}

module.exports = get_letter_interval_2;
