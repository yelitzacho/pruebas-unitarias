function resta(numero1,numero2) {

  if (numero1 == undefined || numero2 == undefined) {
    return "Error";
  } else {
    return numero1 - numero2;
  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.resta = resta;
}
