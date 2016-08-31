function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
	array[i] = changeValue;
    } else {
    	break;
    }
  }
  return array;
}

var keepGoing = function(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
    } else {
      continue;
    }
  }
  return array;
};
//
function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i];
    }
  }
}




//
//   3) loops findBy(array, findFn) finds the a value that satisfies `findFn`:
//      ReferenceError: findBy is not defined
//       at Context.<anonymous> (test/index-test.js:25:14)
//
//   4) loops findBy(array, findFn) returns `null` if no match found:
//      ReferenceError: findBy is not defined
//       at Context.<anonymous> (test/index-test.js:29:14)
