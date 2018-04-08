'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var collection=[];
  if (number_a == number_b){
      collection.push(number_a);
  }
  else{
    var min = number_a<number_b?number_a:number_b;
    var max = number_a>number_b?number_a:number_b;

  if(min==number_a){

        collection.push(min);

      for(var i=collection[0]+1;i<=max;i++){
        collection.push(i);
      }
    }

    else if(max==number_a) {

        collection.push(max);

      for(var i=collection[0]-1;i>=min;i--){
        collection.push(i);
      }
    }
  }

return collection;
}

module.exports = get_integer_interval;
