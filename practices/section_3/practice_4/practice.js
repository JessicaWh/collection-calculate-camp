function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];

  for(var i=0; i < collection_a.length; i++) {
    var temp_count_i = 1;
    var temp_value_i = collection_a[i];

    if( collection_a[i].indexOf('-') != -1) { //获取到的元素a-5形式的
      temp_value_i = collection_a[i].split('-')[0];
      temp_count_i = parseInt(collection_a[i].split('-')[1]);
    }
    for(var j = i+1; j < collection_a.length; j++){
      var temp_value_j = collection_a[j];
      var temp_count_j = 1;
      if( collection_a[j].indexOf('-') != -1) { //获取到的元素a-5形式的
        temp_value_j = collection_a[j].split('-')[0];
        temp_count_j = parseInt(collection_a[j].split('-')[1]);
      }
      if(temp_value_j == temp_value_i){
        temp_count_i += temp_count_j;
        collection_a.splice(j,1);
        j-=1;

      }
    }
    collection_c.push({"key":temp_value_i,"count":temp_count_i});
  }
  for(var i=0; i<collection_c.length; i++){
    for(var j=0; j<object_b.value.length; j++){
      if(collection_c[i].key == object_b.value[j] && collection_c[i].count>=3){
        collection_c[i].count = collection_c[i].count-Math.floor(collection_c[i].count/3);
      }
    }
  }

  return collection_c;
}

module.exports = create_updated_collection;
