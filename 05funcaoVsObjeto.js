console.log(typeof Object); // function
console.log(typeof new Object); // object

// new Object e new Object() é a mesma coisa

const Cliente = function() {};
console.log(typeof Cliente); // function
console.log(typeof new Cliente); // object

// Syntax sugar para function Produto () {}
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // function
console.log(typeof new Produto); // object

/**
 * A forma de criar objetos em javascript é através de funcões
 * O objeto pode também ser criado de forma literal, obviamente: const obj = {}
 * Mas a partir de uma função, a função pode ser instanciada e ter seus próprios
 * atributos que pertencem aquela instância que foi criada com o operador new
 * 
 * Quando um objeto é criado de forma literal, ele já está instanciado com seus 
 * atributos. Diferente de criar ele em forma de função, que precisa ser
 * instanciado com o operador new
 */


