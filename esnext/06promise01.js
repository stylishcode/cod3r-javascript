console.log(typeof Promise) // function

let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(3) // prometeu devolver o valor 3 
  /** 
   * só pode ser passado um valor, outros serão, undefined a não ser que seja
   * retornado algo como um objeto, com os valores dentro */
})
console.log(typeof p) // object
/** 
 * como p é um objeto promise, o valor 3 não pode ser acessado
 * para acessar você precisa utilizar a função then que também recebe uma função
 * como parâmetro e essa função recebe como parâmetro o valor prometido
*/
p.then(function(valorPrometido) {
  console.log(valorPrometido) // 3
})

// Como arrow function, passando funções separadas ao inves de escrever funções no then
// E mostrando encadeamentos de then
let p2 = new Promise(cumprirPromessa => cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']))

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

// parametro do then é o array prometido e retorna o valor do primeiro indice
p2
  .then(primeiroElemento)
  // primeiro indice => primeira letra
  .then(primeiraLetra)
  // primeira letra => primeira letra como minuscula
  .then(letraMinuscula)
  // mostra a letra transformada
  // .then(letraMinuscula => console.log(letraMinuscula))
  // Pode passar somente o console.log que recebe o valor prometido do then anterior)
  // Já que o tem só recebe um único parâmetro
  .then(console.log)
