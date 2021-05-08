/**
 * Criando funções dentro das Funcões/Objetos já existentes na linguagens
 * String.reverse e Array.first não existem na linguagem, mas podem ser criados,
 * não é tão incomum, só usar com cuidado
 * 
 * Sobreescrever métodos que já existem, que não é recomendado
 */
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse()); //r3doC alocsE

Array.prototype.first = function () {
  return this[0];
}

console.log([1, 2, 3, 4, 5].first()); // 1
console.log(['a', 'b', 'c'].first()); // a