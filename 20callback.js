/**
 * Callbacks são funções passadas como parâmetro de alguma outra função e/ou chamada 
 * quando algum evento acontece, ou quando uma parte de código receber uma resposta
 * que estava a espera
 * 
 * Uma função callback pode ser chamada uma ou mais vezes, dependendo do contexto
 * no qual a função é passada
 */

const fabricantes = ["Mercedes", "Audi", "BMW"];

/**
 * Criando uma função para ser callback de outra função
 * 
 * No foreach, o primeiro parametro da função é um valor (que vai guardar o valor dos indices)
 * o segundo parametro é um indice e o terceiro parametro é um array, caso a função não seja
 * chamada de um array
 */
function imprime(nome, indice) {
  console.log(`${indice+1}. ${nome}`);
}
/**
 * forEach, método do array fabricantes recebe essa função callback e cada vez que o evento
 * acontecer, a função forEach chamará a função de novo, por isso o nome callback
 * 
 * Quem é o evento nesse caso? É cada iteração do forEach dentro do array de fabricantes
 * Que executara o código da função imprime
 */
fabricantes.forEach(imprime);

/**
 * Outras formas de passar uma função callback
 * 
 * Arrow function
 */
fabricantes.forEach((nome, indice) => console.log(`${indice+1}. ${nome}`));

/**
 * Se não precisar do indice do array
 */
fabricantes.forEach((nome) => console.log(`${nome}`));

/**
 * Função
 */
fabricantes.forEach(function(nome, indice) {
  console.log(`${indice+1}. ${nome}`);
});

/**
 * Se não precisar do indice do array
 */
fabricantes.forEach(function(nome) {
  console.log(`${nome}`);
});
