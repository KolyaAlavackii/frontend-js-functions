
  var min = function(array) {
    if (array === undefined) { return; }
    var numArray = array.filter(function(element) {
    var num = typeof element;
    return num === "number";
    });
    var arrayLen = numArray.length;
    var minEl = numArray[0];
    for (var i = 0; i < arrayLen; i++) {  
      if (minEl > numArray[i]) { minEl = numArray[i] }
    }
    return minEl;
  }   



 var max = function(array) {
    if (array === undefined) { return; }
    var numArray = array.filter(function(element) {
    var num = typeof element;
    return num === "number";
    });
    var arrayLen = numArray.length;
    var maxEl = numArray[0];
    for (var i = 0; i < arrayLen; i++) {
      if (maxEl < numArray[i]) { maxEl = numArray[i]; }
    }
    return maxEl;
  }
 


 var sum = function() {
    if (arguments.length === 0) {return 0; }
    var arrayLen = arguments.length;
    var sumEl = arguments[0];
    for (var i = 1; i < arrayLen; i++) {
      var num = typeof(arguments[i]);
      if(num != "number"){arguments[i] = 0;}
      sumEl += arguments[i]; 
    }
    return sumEl;
  }

 
