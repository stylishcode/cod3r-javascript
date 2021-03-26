/**
 * Teste no contexto do browser para ver saidas, esse é o contexto do Node
 * mas com explicações para o contexto do browser
 * 
 * No browser, existe um objeto global, que representa o escopo global dentro
 * de uma aplicação javascript que roda no browser, que é o window, que guarda
 * uma grande quantidade de propriedades e funções
 * 
 * Quase sempre, quando são criadas variáveis e/ou funções globais, elas vão parar no window
 * 
 * Entradas no console do browser (depois de -> é a saida):
 * window -> window
 * this -> window
 * (No contexto global, fora de funções e outras situações, this é igual a window)
 * this === window -> true
 * (variaveis declaradas com var vão para o escopo global, que é o window)
 * var a = "texto"
 * window.a -> "texto"
 * this.a -> "texto"
 * (var permite redeclarações de variáveis, sobrescrevendo o conteúdo da que estava 
 *  no escopo global, sem warnings, sem erro, sem nada e isso é péssimo)
 * var a = 123;
 * window.a -> 123
 * this.a -> 123
 * (variáveis declaradas com let podem ser globais, mas não vão 
 *  para o escopo global window)
 * let b = 123;
 * window.b -> undefined
 * this.b -> undefined
 * (let não permite redeclaração, apenas a mudança do valor)
 * let b = 1234; -> Identified 'b' has already been declared
 * b -> 123
 * (constantes, no quesito escopo, se comporta igual o let)
 * const c = 456;
 * window.c -> undefined
 * this.c -> undefined
 * c = 4567; -> Erro de reatribuição de valor a uma constante
 * function f1() { return console.log(this===window) }
 * f1(); -> true
 * window.f1() -> true
 * this.f1() -> true
 * const f2 = function() { console.log(this===window) }
 * window.f2() -> window.f2 is not a function
 * this.f2() -> this.f2 is not a function
 * 
 * variaves e constantes não vão para o objeto global window. Elas ficam num lugar
 * em memória do browser, e o objeto que contem todas os lets e constantes não pode
 * ser acessado, mas elas são globais (não do escopo global)
 * 
 * (Fugindo do escopo global através de objetos)
 * let pessoa = {nome: 'Matheus', falar: function() { return `Eu sou ${this.nome}` }}
 * Nesse caso, this é a própria pessoa e não o escopo global
 * 
 * pessoa.verificarEscopo = function { return this === window }
 * pessoa.verificarEscopo(); -> false
*/

/**
 * Contexto do Node
 */
// local, dentro do arquivo
let a = 3;
console.log(this.a); //undefined
/**
 * Global no contexto Node equivale ao objeto global window no browser
 */
console.log(global.a); //undefined

// Variável declarada no objeto global
global.b = 123;
abc = 345; // Variavel declarada sem let ou const vai para o objeto global (não faça isso)
console.log(global.b); //3
console.log(global.abc); //345

// this é igual ao module.exports
console.log(this === module.exports); //true
this.c = 456;
console.log(this.c); //456
console.log(module.exports.c); //456

// mas diferente de global
console.log(this === global);
console.log(global.c); //undefined

/**
 * this.propriedade/metodo, vai exportar essa propriedade/metodo para fora do arquivo
 * Dentro de Node, cada arquivo é um modulo, muito diferente do browser, no qual todos
 * os arquivos muitas vezes são minificados e tudo disputa no escopo global. No caso de
 * Node cada arquivo é um modulo diferente, é tudo modularizado
 */

this.d = false;
this.e = 'teste';
this.f = [1, 2, 'a'];

console.log(module.exports); //{ c: 456, d: false, e: 'teste', f: [ 1, 2, 'a' ] }

/**
 * Em vez de usar this para exportar as coisas, é usado mais a forma module.exports = {  }
  
  module.exports = {g: 1, h: 'Nome', e: { idade: 25 }}
 */
