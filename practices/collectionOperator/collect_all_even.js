'use strict';

function collect_all_even(collection) {
  //在这里写入代码
	var new_collection = [];
	for(var i = 0; i < collection.length; i++){
		if( collection[i]%2 == 0){
			new_collection.push(collection[i]) ;
		}
	}
	return new_collection;
}

module.exports = collect_all_even;
