/**
 * Herança em Javascript trabalha com o conceito de protótipos
 * Ex:
 * Você tem um objeto que tem o atributo nome e ai você tenta acessar o atributo nome
 * e ele vai pegar o atributo do próprio objeto.
 * Se você tá tentando acessar o atributo corDoCabelo e nesse objeto em que você está
 * tentando procurar não tem corDoCabelo, o objeto (filho) tem uma referência pro seu pai
 * que é exatamente esse conceito do protótipo, você tem uma referência para o seu
 * protótipo (pai) e se você não achou uma propriedade no objeto, ele vai procurar saber
 * se o objeto tem protótipo, se tiver, ele vai procurar nesse protótipo, se ele não
 * encontrar a corDoCabelo nesse protótipo, ele vai procurar saber se esse protótipo (pai) tem
 * protótipo (avô) e assim ele vai caminhando nessa hierarquia de objetos até encontrar o atributo
 * e se ele não encontrar, retorna undefined, caso ele encontre, retorna o atributo
 * E assim é possível reaproveitar/reusar atributos e comportamentos que estão em objetos
 * referenciados a partir de um atributo que representa o protótipo do objeto
 * 
 * Todo objeto criado com new Object ou de forma literal (exceto em função construtora), 
 * tem uma propriedade chamada __proto__ (padronizada na ES6) que é usada para acessar 
 * o seu protótipo (objeto pai) e ele por padrão aponta para Object.prototype. 
 * Podemos fazer com que o objeto aponte para outro objeto, que não seja o Object.prototype, 
 * por exemplo, um objeto Ferrari que aponta para Object.prototype pode apontar para um objeto Carro
 * 
 * [[prototype]] != prototype
 * [[prototype]] é o conceito de protótipo que é representado no objeto por __proto__
 * prototype é um atributo que só está disponível dentro de uma função
 * 
 */

const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

/**
 * Acessando o protótipo (pai) do objeto ferrari
 */
console.log(ferrari.__proto__); // [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype); // true
console.log(volvo.__proto__ === Object.prototype); // true
/** Apontam para o mesmo protótipo */
console.log(ferrari.__proto__ === volvo.__proto__); //true
/** Object.prototype não tem um protótipo, e sim null */
console.log(Object.prototype.__proto__); // null

/**
 * Funções tem o atributo prototype, objetos não (eles tem o [[prototype]] que é __proto__)
 */
function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype); // [Object: null prototype] {} {}