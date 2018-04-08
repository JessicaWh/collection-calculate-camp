'use strict';

function compute_chain_median(collection) {
  //在这里写入代码

  var newCollection = collection.split('->');
  var res =  newCollection.map(function(x){
    return parseInt(x);
  });

  function sortFunc(a,b){
    return a-b;
  }
  res = res.sort(sortFunc);
  if(res.length%2==0){
    return (res[res.length/2]+res[res.length/2-1])/2;
  }
  else{
    return res[(res.length-1)/2];
  }
}

module.exports = compute_chain_median;
