'use strict';


function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection=[];
  if (number_a == number_b){
      if(number_a%2==0) {
      collection.push(number_a);
      }
      else{
        collection.push();
      }
  }
  else{
    var min = number_a<number_b?number_a:number_b;
    var max = number_a>number_b?number_a:number_b;

  if(min==number_a){
      if(min%2==0){
        collection.push(min);
      }
      else{
        collection.push(min+1);
      }
      for(var i=collection[0]+2;i<=max;i+=2){
        collection.push(i);
      }
    }

    else if(max==number_a) {
      if(max%2==0){
        collection.push(max);
      }
      else{
        collection.push(max-1);
      }
      for(var i=collection[0]-2;i>=min;i-=2){
        collection.push(i);
      }
    }
  }

return collection;
}

module.exports = get_integer_interval_2;
