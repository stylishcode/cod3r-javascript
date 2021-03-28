/**
 * Função factory é uma função que retorna um objeto, é um padrão de projeto, não somente
 * utilizado por javascript. Pode também retornar um objeto com vários funções.. etc
 * 
 * Cenário: Criar vários objetos, que tenham atributos iguais se torna repetitivo e isso pode
 * ser ruim, a função factory resolve isso
 * 
 * Ela gera a instância de um objeto, que podem ser trabalhos de forma independente
 */

/**
 * Caso de vários objetos (repetitivo)
 */

const prod1 = {
  nome: 'Computador',
  preco: 4000
}

const prod2 = {
  nome: 'Televisão',
  preco: 2456.42
}

const prod3 = {
  nome: 'Mesa',
  preco: 400
}

console.log(prod1);
console.log(prod2);
console.log(prod3);

/**
 * Com função factory
 */
function gerarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(gerarProduto('Computador', 4000));
console.log(gerarProduto('Televisão', 2456.42));
console.log(gerarProduto('Mesa', 400));
