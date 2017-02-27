function fibonacci(upperLimit) {
  var fib = [0,1];
  for(i=fib; i<=upperLimit; i++){
    fib[i] = fib[i-2] + fib[i-1];
    return(fib[i]);
  }
  if (upperLimit % 2 !== 0) {
    return "Error";
  }
}

  /*var array = [0, 1];
  for(var i=array.length; i<upperLimit; i++) {
    array[i] = array[i-2] + array[i-1];
  }
*/

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
