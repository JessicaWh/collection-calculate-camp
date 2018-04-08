'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if(collection_a[i] === collection_b[j]){
        collection.push(collection_a[i]);
        break;
      }
    }

  }

  var compare = function(x,y){
    if(x.toString()<y.toString()){
      return 1;
    }
    else if (x.toString()>y.toString()) {
      return -1;
    }
    else {
      return 0;
    }
  }
  collection.sort(compare);

//collection.sort();
return collection;
}

module.exports = get_intersection;
