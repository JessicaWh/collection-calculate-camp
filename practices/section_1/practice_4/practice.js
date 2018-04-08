function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var res=[];
  var key=[];
  for(var i=0;i<collection_a.length;i++) {
    key.push(collection_a[i].key);
  }
  for(var i=0;i<key.length;i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (key[i] == object_b.value[j]) {
        res.push(key[i]);
        break;
      }
    }
  }

  return res;
}

module.exports = collect_same_elements;
