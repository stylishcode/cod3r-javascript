// Esse carregamento só precisa ser feito uma vez, no caso, neste arquivo e todos os outros arquivos
// inclusive esse, terão acesso a MinhaApp
require('./global')

console.log(MinhaApp.saudacao())
console.log(MinhaApp.nome)

// É possível alterar inclusive, o valor de um atributo, o que não é legal
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
// Para prevenir isso, você pode congelar o objeto com Object.freeze({})
