var assert = require('assert');
var Mate = require('../ejercicio-04.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('fibonacci', function(){
//Debe devolver las secuencias correctas fibonnaci
  it("should return the correct fibonnaci secuences",function(){
    assert.deepEqual(Mate.fibonacci(3),[0,1,1])
  })
//Debe generar un error cuando se establece un límite superior no válido
  it("should raise an error when an invalid upper limit is set",function(){
    assert.equal(Mate.fibonacci("string"),"Error")
    assert.equal(Mate.fibonacci(false),"Error")
  })
//Debe generar un error cuando se proporciona un límite superior negativo o cero
  it("should raise an error when a negative  or cero upper limit is provided",function(){
    assert.equal(Mate.fibonacci(-1),"Error")
  })
})
