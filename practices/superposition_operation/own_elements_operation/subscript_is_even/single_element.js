'use strict';
var single_element = function(collection){
  var temp=[];
  for(var i=0; i<collection.length-1; i+=2){
    temp.push(collection[i+1]);
  }

  for(var i=0; i<temp.length; i++){
    var flag=0;
    for(var j=i+1; j<temp.length; j++){
      if(temp[j] == temp[i]){
        temp.splice(j,1);
        j-=1;
        flag=1;
      }
    }
    if(flag==1){
      temp.splice(i,1);
      i-=1;
    }
  }
  return temp;
};
module.exports = single_element;
