function count_same_elements(collection) {
  //在这里写入代码


  var res = [];

  for(var i=0; i < collection.length; i++) {
    var temp_count_i = 1;
    var temp_value_i = collection[i];

    if( collection[i].indexOf('-') != -1 ) { //获取到的元素a-5形式的
      temp_value_i = collection[i].split('-')[0];
      temp_count_i = parseInt(collection[i].split('-')[1]);
    }
    if( collection[i].indexOf(':') != -1 ) { //获取到的元素a-5形式的
      temp_value_i = collection[i].split(':')[0];
      temp_count_i = parseInt(collection[i].split(':')[1]);
    }
    if( collection[i].indexOf('[') != -1 && collection[i].indexOf(']') != -1) { //获取到的元素a-5形式的
      temp_value_i = collection[i].substring(0 , collection[i].indexOf('['));
      temp_count_i = parseInt(collection[i].substring(collection[i].indexOf('[')+1,collection[i].indexOf(']')));
    }
    for(var j = i+1; j < collection.length; j++){
      var temp_value_j = collection[j];
      var temp_count_j = 1;
      if( collection[j].indexOf('-') != -1) { //获取到的元素a-5形式的
        temp_value_j = collection[j].split('-')[0];
        temp_count_j = parseInt(collection[j].split('-')[1]);
      }
      if( collection[j].indexOf(':') != -1 ) { //获取到的元素a-5形式的
        temp_value_j = collection[j].split(':')[0];
        temp_count_j = parseInt(collection[j].split(':')[1]);
      }
      if( collection[j].indexOf('[') != -1 && collection[j].indexOf(']') != -1) { //获取到的元素a-5形式的
        temp_value_j = collection[j].substring(0 , collection[j].indexOf('['));
        temp_count_j = parseInt(collection[j].substring(collection[j].indexOf('[')+1,collection[j].indexOf(']')));
      }

      if(temp_value_j == temp_value_i){
        temp_count_i += temp_count_j;
        collection.splice(j,1);
        j-=1;

      }
    }

    res.push({"name":temp_value_i,"summary":temp_count_i});


  }
  return res;
}

module.exports = count_same_elements;
