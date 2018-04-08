'use strict';
var rank_desc = function(collection){
  var result=collection.sort(function(x,y){
    if(x>y){
      return 1;
    }
    else if(x<y){
      return -1;
    }
    else {
      return 0;
    }
  });
  return result;
//  return [2,3,4,5,6];
};

module.exports = rank_desc;
