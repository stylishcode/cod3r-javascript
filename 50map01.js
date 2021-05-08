const nums = [1, 2, 3, 4, 5]

/**
 * Map é um for com propósito
 * O propósito dele é pegar um array, fazer uma transformação e devolver outro array
 * de tamanho igual, mas com alguma transformação
 * 
 * Por exemplo, pegar todos os elementos de um array de devolver um outro array multiplicado
 * por 2
 */
let resultado = nums.map(function(num) { return num * 2 });

/**
 * Map pode ser encadeado, gerando outros retornos a partir de outros maps
 */

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraReal);
console.log(resultado); // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]