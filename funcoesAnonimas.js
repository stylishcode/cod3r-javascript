/**
 * Funcão anônima é uma função que não tem nome e que é muito utilizada como parametros
 * para outras funções, pode ser atribuida a variáveis também
 */

const soma = function(a, b) {
  return a + b;
};

const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4); //7 (operação padrão é a função soma)
imprimirResultado(3, 4, soma); // 7 (no caso nem precisava passar função soma, pq ela já é a padrão)
imprimirResultado(3, 4, function(a, b) {
  return a - b;
}); // -1 (no lugar da função padrão que era soma, foi passada uma função anônima que realiza a subtração)
imprimirResultado(10, 5, function divide(a, b) {
  return a / b;
}); // 2 (funções passadas como parametro podem ser nomeadas também)
imprimirResultado(3, 4, (a, b) => a * b); // 12 (foi passada uma arrow function na operacao)

/**
 * Função anônima dentro de objetos
 */
const pessoa = {
  falar: function() {
    console.log('Opa!');
  }
};

pessoa.falar(); // Opa

/**
 * Funções também podem ser nomeadas dentro de objetos
 */
const pessoa2 = {
  falar: function dizOpa() {
    console.log('Opa!');
  }
};

pessoa2.falar(); // Opa

/**
 * Nova forma de criar funções dentro de objetos
 */
const pessoa3 = {
  falar() {
    console.log('Opa!');
  }
};

pessoa3.falar(); // Opa

/**
 * Arrow functions dentro de objetos
 */
const pessoa4 = {
  falar: () => console.log('Opa!'),
};

pessoa4.falar(); // Opa