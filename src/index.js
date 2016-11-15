//var myArray = [2, 6, 20, 5, 50, "kdsjghs", 34, -25];
  var min = function(array) {
    var arrayLen = array.length,
        minEl = array[0];
    for (var i = 0; i < arrayLen; i++) {
      if (minEl > array[i]) {
        (minEl = array[i]);
      }
    }
    return minEl;
  }
  //console.log(min(myArray));    



 var max = function(array) {
    var arrayLen = array.length,
        maxEl = array[0];
    for (var i = 0; i < arrayLen; i++) {
      if (maxEl < array[i]) {
        (maxEl = array[i]);
      }
    }
    return maxEl;
  }
 // console.log(max(myArray)); 




var sum = function(array) {
    var sumEl = 0;
    var arrayNumber = array.filter(function(number){
    return number;
    });

    for (var i = 0; i < arrayNumber.length; i++) {
      var arrayEl = typeof(arrayNumber[i]);
      if(arrayEl != "number"){
      arrayNumber[i] = 0;
      };

    sumEl += arrayNumber[i];
    };

    return sumEl;
  };
 // console.log(sum(myArray)); 
