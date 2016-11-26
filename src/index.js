// var myArray = [15, null, false, "4", undefined, true, 99, 6];
  var min = function(array) {
    var arrayLen = array.length;
    var minEl = array[0];
    for (var i = 0; i < arrayLen; i++) {
      if (minEl > array[i]) {
        (minEl = array[i]);
      }
    }
    return minEl;
  }
  // console.log(min(myArray));    



 var max = function(array) {
    var arrayLen = array.length;
    var maxEl = array[0];
    for (var i = 0; i < arrayLen; i++) {
      if (maxEl < array[i]) {
        (maxEl = array[i]);
      }
    }
    return maxEl;
  }
 // console.log(max(myArray)); 


 var sum = function() {
    var arrayLen = arguments.length;
    var sumEl = arguments[0];
    for (var i = 1; i < arrayLen; i++) {
      var num = typeof(arguments[i]);
      if(num != "number"){
        arguments[i] = 0;
      }
        sumEl += arguments[i]; 
    }
    return sumEl;
  }

// console.log(sum(15, null, false, "4", undefined, true, 99, 6)); 