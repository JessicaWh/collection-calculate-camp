function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var no_repeat = collection_a.filter(function (element,index,self){
    return self.indexOf(element) == index;
  });
  var sum=[];
  for(var i=0; i<no_repeat.length; i++){
    sum.push(0);
  }
  collection_a.filter(function (element) {
    for(var i=0; i<no_repeat.length; i++){
      if(no_repeat[i] == element){
        sum[i]++;
      }
    }
    return sum;
  });

  var collection_c = [];
  for(var i=0; i<no_repeat.length; i++){
    var temp = {};
    temp.key = no_repeat[i];
    temp.count = sum[i];
    collection_c.push(temp);
  }

  for(var i=0; i<collection_c.length; i++){
    for(var j=0; j<object_b.value.length; j++){
      if(collection_c[i].key == object_b.value[j] && collection_c[i].count >= 3){
        collection_c[i].count = collection_c[i].count -Math.floor(collection_c[i].count/3);
      }
    }
  }

  return collection_c;
}

module.exports = create_updated_collection;
