function MeuObjeto() {}
console.log(MeuObjeto.prototype); // {}

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

/**
 * Todos os objetos criados a partir de uma mesma função construtora, apontam
 * para o mesmo prototype
 */ 
console.log(obj1.__proto__ === obj2.__proto__); // true
/**
 * Quando você cria um objeto a partir de uma função construtura usando new,
 * o protótipo desse objeto aponta para função que criou ele, .prototype
 * 
 * Já quando o objeto é criado a partir da notação literal ou usando new Object,
 * por padrão o protótipo dele é Object.prototype
 */
console.log(MeuObjeto.prototype === obj1.__proto__); // true

// Definindo atributos no protótipo
MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.falar();

obj2.nome = 'Rafael';
obj2.falar();

// Mudando a referência do protótipo e passando a usar seus atributos/comportamentos
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // true
console.log(MeuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true