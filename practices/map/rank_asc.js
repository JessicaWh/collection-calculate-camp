'use strict';


var rank_asc = function(collection){
  var result=collection.sort(function(x,y){
    if(x<y){
      return 1;
    }
    else if(x>y){
      return -1;
    }
    else {
      return 0;
    }
  });
  return result;
//  return result;
  //return [6,5,4,3,2];
};

module.exports = rank_asc;
