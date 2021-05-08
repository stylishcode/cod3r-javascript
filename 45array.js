/**
 * Arrays em javascript são objetos, só que ao invés de organizar seus atributos por chave e valor
 * Ele organiza seus dados através de índices, uma estrutura indexada que começa em 0
 * 
 * Arrays em javascript são estruturas heterogeneas, ou seja, aceitam vários tipos de dados no
 * mesmo array, mas não é recomendado usar dessa forma, o ideal seria ter um tipo de dado por array
 */

console.log(typeof Array, typeof new Array, typeof []); // function object object

const aprovadosNew = new Array('Bia', 'Carlos', 'Ana');
let aprovadosLiteral = ['Bia', 'Carlos', 'Ana']; // recomendado usar forma literal
console.log(aprovadosNew);
console.log(aprovadosLiteral);

// acessando indices
console.log(aprovadosLiteral[0]); // Bia
console.log(aprovadosLiteral[1]); // Carlos
console.log(aprovadosLiteral[2]); // Ana
console.log(aprovadosLiteral[3]); // Undefined

// adicionando elementos
aprovadosLiteral[3] = 'Paulo';
aprovadosLiteral.push('Abia'); // recomendado usar o push para adicionar elementos
console.log(aprovadosLiteral.length); // 5

// Adicionando elementos pulando indices que ainda nem existem
// do indice 5 ao 8, os valores serão undefined
aprovadosLiteral[9] = 'Rafael';
console.log(aprovadosLiteral.length); // 10
console.log(aprovadosLiteral); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

// ordenando array de forma crescente (alfabetica, numérica.. etc)
aprovadosLiteral.sort();
console.log(aprovadosLiteral); // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

// excluindo elementos (não reordena o array, apenas coloca undefined na posição excluida)
delete aprovadosLiteral[1];
console.log(aprovadosLiteral); // [ 'Abia', <1 empty item>, 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]
// provando que o array não foi ordenado, Bia continua no indice 2
console.log(aprovadosLiteral[2])// Bia

/**
 * Método splice
 * Adiciona elementos em um determinado indice
 * Exclui elementos de um array
 * Remove e adiciona elementos ao mesmo tempo
 */
aprovadosLiteral = ['Bia', 'Carlos', 'Ana'];
// 1param: elementos inicial, 2param: numero de elementos a ser excluido começando do elemento inicial
aprovadosLiteral.splice(1, 1); // remove Carlos
console.log(aprovadosLiteral); // ['Bia', 'Ana']
/**
 * Remove Carlos e Ana e adiciona nas respectivas posições excluidas o Elemento1 e o Elemento2
 */
aprovadosLiteral.splice(1, 2, 'Elemento1', 'Elemento2'); 
console.log(aprovadosLiteral); // ['Bia', 'Elemento1', 'Elemento2']
/**
 * Adicionando sem excluir nínguem
 */
aprovadosLiteral = ['Bia', 'Carlos', 'Ana'];
/**
 * Começando na posição 1, adiciona Elemento1 e Elemento2
 */
aprovadosLiteral.splice(1, 0, 'Elemento1', 'Elemento2');
console.log(aprovadosLiteral); // [ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]