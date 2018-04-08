'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var res = collection.filter(function(x){
    return x%3==0;
  });
  return res;
}

module.exports = choose_multiples_of_three;
