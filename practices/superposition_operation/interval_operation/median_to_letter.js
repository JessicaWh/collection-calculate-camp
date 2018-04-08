'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var str = [' '];
  for( var i=97; i<123; i++){
    str.push(String.fromCharCode(i));
  }
  var median = 0;
  if( collection.length % 2 == 0 ){
    median = Math.ceil((collection[collection.length/2] + collection[collection.length/2-1])/2 );
  }
  else{
    median = collection[Math.floor(collection.length/2)];
  }
  return str[Math.floor(median/26)]+str[median%26];
}

module.exports = median_to_letter;
