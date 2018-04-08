'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection.length;i++){
    if(typeof(collection[i]) == 'object'){
      for(var j=0;j<collection[i].length;j++){
        for(var k=0;k<result.length;k++){
          if(result[k]==collection[i][j]){
            break;
          }
        }
        if(k==result.length){
          result.push(collection[i][j]);
        }
      }
    }
    else{
      for(var k=0;k<result.length;k++){
        if(result[k]==collection[i]){
          break;
        }
      }
      if(k==result.length){
        result.push(collection[i]);
      }
    }
  }

  return result;
}

module.exports = double_to_one;
