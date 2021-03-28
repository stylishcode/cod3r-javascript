/**
 * O Operador de desestruturaçao foi introduzido na ES 2015 (ES6)
 * Serve para extrair dados/atributos de uma estrutura (objetos, arrays...)
 * 
 * Por exemplo: Extrair os atributos de um objeto, ou extrair elementos de um array
 * 
 * O operador destructuting tem duas formas de escrita:
 * a) Quando ele trabalha no âmbito de objeto, se usa {}, porque objetos literais
 * são criados usando {}
 * 
 * b) Quando ele trabalho no âmbito de arrays, se usa [], porque arrays são criados usando []
 */
// DESTRUCTURING COM OBJETOS
// objeto literal
const pessoa = {
  nome: 'Matheus',
  idade: 23,
  endereco: {
    logradouro: 'Tv. Mauriti',
    numero: 773
  }
}
//extraindo atributos/dados com desestruturação
const { nome, idade } = pessoa;
console.log(nome, idade); //Matheus, 23

//dando outro nome para os atributos/dados na desestruturação
const { nome: n, idade: i } = pessoa;
console.log(n, i); //Matheus, 23

//Valores padrão para atributos/dados que não existem no objeto desestruturado
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); // undefined, true

//Extraindo atributos/dados de objetos dentro de objetos desestruturados
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Tv. Mauriti, 773, undefined

/* 
  Erro ao tentar acessar atributo de um atributo não definido dentro de um
  objeto desestruturado
*/
const { conta: { ag, num } } = pessoa;
console.log(ag, num); //Cannot desestructure property 'ag' of 'undefined' or 'null'

// DESTRUCTURING COM ARRAYS
const [a] = [10];
console.log(a); //10

//Pulando elementos que não se deseja extrair
const [e1, ,e3, e4] = [20, 14, 18, 16];
console.log(e1, e3, e4, e6); //20 18 16

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6); //10 9 undefined 0

//Extraindo elementos/dados de arrays dentro de arrays desestruturados
const [nota1, [nota2, nota3]] = [1, [8.5, 7.9]];
console.log(nota1, nota2, nota3); //1 8.5 7.9

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota); // 6

// DESTRUCTURING EM FUNÇÕES
// PASSANDO OBJETOS COMO PARAMETROS
/**
 * Não existe um objeto no parametro da função e sim será passado um objeto
 * para a função e em vez de acessar obj.atributo dentro da função, 
 * será somente atributo
 */
function rand({ min=0, max=1000 }) {
  if (min > max) {
    // destructuring = novo array com inversão dos valores
    [min, max] = [max, min];
  }
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); //Valor entre 40 e 50
console.log(rand({ min: 955 })); // Valor entre 1000 (padrão se max não for informado) e 955
console.log(rand({})); // Valor entre 0 e 1000 (ambos padrões se min e max não forem informados)
console.log(rand()); // TypeError: Cannot desestructure property 'min' of 'undefined' or 'null'

// DESTRUCTURING EM FUNÇÕES
// PASSANDO ARRAYS COMO PARAMETROS

function rand2([ min=0, max=1000 ]) {
  if (min > max) {
    // destructuring = novo array com inversão dos valores
    [min, max] = [max, min];
  }
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand2([50, 40])); //Valor entre 40 e 50 (inverteu min para max)
console.log(rand2(992)); //Valor entre 992 (min) e 1000 (padrão)
console.log(rand2([, 10])); //Valor entre 0 (padrão) e 10 (max)
console.log(rand2([])); //Valor entre 0 (padrão) e 1000 (padrão)
console.log(rand2()); // TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined