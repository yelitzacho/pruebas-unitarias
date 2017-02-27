var assert = require('assert');
var Busqueda = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('busquedaLinear', function(){

    it('should return false if the item is not found in the array', function(){ //Debe devolver false si el elemento no se encuentra en la matriz
      assert.equal(Busqueda.busquedaLinear([1,2,3],4),false)
    })

    it('should return the index of the item if it is found', function(){//Debe devolver el índice del elemento si se encuentra
      assert.equal(Busqueda.busquedaLinear(
        [1,2,3],
        2),
        1)
    })

    it('should raise an error if the array param is missing', function(){ //Debe generar un error si falta el parámetro array
      assert.equal(Busqueda.busquedaLinear(undefined,3),"Error")
    })

    it('should raise an error if no item to search param is missing', function(){//Debe generar un error si no hay ningún parámetro de búsqueda de parámetros que falta
      assert.equal(Busqueda.busquedaLinear([1,2,3],undefined),"Error")
    })

    it('should return ONLY the first match if more than one searched values are in the array', function(){//Debe devolver SOLAMENTE la primera coincidencia si más de uno de los valores buscados están en la matriz
      assert.equal(Busqueda.busquedaLinear([1,2,2,3],2),1)
    })

    it('should not accept any wrong param type', function(){//No debe aceptar ningún tipo de parámetro incorrecto
      assert.equal(Busqueda.busquedaLinear("string",false),"Error de dato")
    })
})
