'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection.length;i++){
    if(typeof(collection[i]) == 'object'){
      for(var j = 0;j<collection[i].length;j++){
        result.push(collection[i][j]);
      }
    }
    else{
      result.push(collection[i]);
    }
  }
  /*var arr = [];
  arr=([].concat.apply([],arrs));
*/

/*  if (!arrs || !arrs.length) throw new ReferenceError();
  var arr = [];

  (function flatten (items) {
    items.forEach(function(item){
      if (item !== undefined && item !== null) {
        if (Array.isArray(item)) {
          arr.push(flatten(item));
        } else {
          arr.push(item);
        }
      }
    });
  }(arrs));

  arr = arr.filter(function(item){
    return item;
  });
  */

  return result;
}


module.exports = double_to_one;
