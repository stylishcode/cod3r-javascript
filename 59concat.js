const filhas = ["Valeskah", "Cibalena"];
const filhos = ["Uoxiton", "Uesclei"];
// Os arrays originais não são alterados
// Também é possível adicionar a concatenação, um terceiro ou mais filhos
const todos = filhas.concat(filhos, "Fulano");
console.log(todos, filhas, filhos);
// Você pode concatenar elementos a partir de um array vazio
// Basicamente ele desempacotou em 1 nível o que estava dentro de array ou matriz
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]