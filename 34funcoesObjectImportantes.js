const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
};

//chaves do objeto
console.log(Object.keys(pessoa)); // ['nome', 'idade', 'peso']
// valores do objeto
console.log(Object.values(pessoa)); // ['Rebeca', 2, 13]
// array com chave, valor
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

//iterando array chave, valor
Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
});
/**
 * nome: Rebeca
 * idade: 2
 * peso: 13
 */

//destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
});
/**
 * nome: Rebeca
 * idade: 2
 * peso: 13
 */

//Definindo propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
  // listar chave em iterações
  enumerable: true,
  // permitir modificações
  writable: false,
  // propriedade
  value: '01/01/2019'
});

// Tentando modificar com o writable em false (não vai modificar)
pessoa.dataNascimento = '01/01/2021';
console.log(pessoa.dataNascimento); //'01/01/2019'
console.log(Object.keys(pessoa)); //[ 'nome', 'idade', 'peso', 'dataNascimento' ]

//Object.assign (ES6)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c:3, a:4};
//Junta ao destino, os atributos passados
const obj = Object.assign(dest, o1, o2);
console.log(obj); //{ a: 4, b: 2, c: 3 } (sobreescreve o valor inicial de a)

//Freeze
Object.freeze(obj);
obj.c = 1234;
console.log(obj); ////{ a: 4, b: 2, c: 3 } (ignorou alteração em c)