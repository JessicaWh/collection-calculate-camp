function count_same_elements(collection) {
  //在这里写入代码
  var no_repeat = collection.filter(function (element,index,self){
    return self.indexOf(element) == index;
  });
  var sum=[];
  for(var i=0; i<no_repeat.length; i++){
    sum.push(0);
  }
  var totalTime = collection.filter(function (element) {
    for(var i=0; i<no_repeat.length; i++){
      if(no_repeat[i] == element){
        sum[i]++;
      }
    }
    return sum;
  });

  var result = [];
  for(var i=0; i<no_repeat.length; i++){
    var res = {};
    res.key = no_repeat[i];
    res.count = sum[i];
    result.push(res);
  }


  return result;
}

module.exports = count_same_elements;
