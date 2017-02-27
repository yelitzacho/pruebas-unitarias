var assert = require('assert');
var Calculadora = require('../ejercicio-01.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('suma', function(){
    it('should return the sum of 2 numbers', function(){ //Retornar la suma de dos numeros
      assert.equal(Calculadora.suma(2,5),7)
    })

    it('should return an Error if one of 2 params are missing', function(){ //Retornar error si no existe ninguno d elos dos parametros
      assert.equal(Calculadora.suma(3),"Error")
    })

    it('should add the numbers even if they are strings', function(){  //Retornar la suma de los numeros si son strings
      assert.equal(Calculadora.suma(2,"2"),4)
      assert.notEqual(Calculadora.suma(2,"2"),"22")
    })
})
