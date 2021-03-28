/**
 * Por javascript ser uma linguagem de tipagem fraca, existe uma "pegadinha"
 * que faz com que a forma como é feita a comparação seja diferente de outras
 * linguagens
 * 
 * Por conta de existir tipos diferentes e por conta que a linguagem é fracamente
 * tipada, na hora de comparar, também é necessário saber se deseja comparar os valores
 * mesmo quando são tipos diferentes, ou se, deseja comparar de forma mais precisa,
 * mais estrita, ou seja, não só o valor tem que ser igual ao outro, mas o tipo também
 */

console.log('01)', '1' == 1); //true
console.log('02)', '1' === 1); //false
console.log('03)', '3' != 3); //false
console.log('04)', '3' !== 3); //true

console.log('05)', '3' < 2); //false
console.log('06)', '3' > 2); //true
console.log('07)', '3' <= 2); //false
console.log('08)', '3' >= 2); //true

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 === d2); //false (comparando endereço de memória)
console.log('10)', d1 == d2); // false (comparando também endereço de memória)
console.log('11)', d1.getTime() === d2.getTime()); //true (comparando retorno do método)
console.log('12)', d1.getTime() == d2.getTime()); //true (comparando retorno do método)
console.log('13)', undefined == null); //true
console.log('14)', undefined === null); //false