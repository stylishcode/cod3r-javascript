const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// module.exports de moduloA e B exporta um objeto
// module.exports de moduloC e D exporta uma função, que retorna um objeto
// então é necessário chamar a função depois do require, por isso o () no final
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3, 3. B mudou porque compartilha a mesma instância

contadorC.inc()
contadorC.inc()
console.log(contadorC, contadorD.valor) // 3, 1. D não alterou porque não compartilha a mesma instância
