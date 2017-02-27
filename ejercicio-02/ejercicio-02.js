function busquedaLinear (array,itemToSearch) {

  if (array == undefined){
    return "Error";
  }
  if(itemToSearch == undefined){
    return "Error";
  }
  if (array == null && itemToSearch == null){
    return "Error de dato";
  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
