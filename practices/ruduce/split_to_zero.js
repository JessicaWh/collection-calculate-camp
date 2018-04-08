'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码

  var res=[number];
  var i=1;
  while(res[i-1]-interval>0.0){
    res[i] = Math.floor((res[i-1]-interval)*100)/100;
    i++;
  }
  res[i] = Math.floor((res[i-1]-interval)*100)/100;

  return res;
}

module.exports = spilt_to_zero;
