var assert = require('assert');
var Calculadora = require('../ejercicio-03.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('Resta', function(){
//Debe devolver el resto de dos números
  it("should return the remainder of two numbers",function(){
    assert.equal(Calculadora.resta(3,2),1)
  })
//Debe generar un error si falta un parámetro
  it("should raise an error if one param is missing",function(){
    assert.equal(Calculadora.resta(2),"Error")
  })
  
})
