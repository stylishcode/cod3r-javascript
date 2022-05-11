console.log(module.exports == this); // true
console.log(module.exports == exports); // true

// As 3 abordagem exportam as variáveis para fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

// Mesmo atribuindo null para a variável exports, module.exports continua com os valores
// definidos acima, isso porquê exports é apenas uma variável de referência que aponta para
// o mesmo objeto que module.exports
exports = null
console.log(exports)
console.log(module.exports)

// Mas no final das contas, só quem será retornado/exportado a partir de um módulo
// é o module.exports

// Por isso, coisas como o exemplo abaixo não irá funcionar
exports = {
  name: 'Teste'
}
// exports apenas passou a apontar para esse novo objeto, porém ele não será exportado do arquivo
// e module.exports se mantém da mesma forma
console.log(module.exports);

// Sempre que for necessário atribuir um novo objeto para ser exportado
// É obrigatório usar o module.exports
module.exports = {
  publico: true
}
