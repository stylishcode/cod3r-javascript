// antes do ES 2015 (ES6)
// Em JS, os parametros de uma função ser vazio, não significa que a mesma não pode receber parametros
function soma() {
  let soma = 0;
  // iterando sobre o array de argumentos internos da função
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma()); //0
console.log(soma(1)); //1
console.log(soma(1.1, 2.2, 3.3)); //6.6
console.log(soma(1.1, 2.2, "Teste")); //3.3000000000000003Teste
console.log(soma('a', 'b', 'c')); //0abc