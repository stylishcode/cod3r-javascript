// Antes da ES 2015 (ES6)
// Estrategia 1 para valores padrão
function soma(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma()); //3
console.log(soma(3)); // 3 + 1(b padrao) + 1(c padrao) = 5
console.log(soma(1, 2, 3)); //6
/**
 * Bug de operação lógica devido a 0 ser falso, então o resultado dos padrões vai ser 1
 * devido ao operador OU
 * 
 * ex:
 * a = a(0) || 1; -> Pega o valor verdadeiro que é 1
 * b = b(0) || 1; -> pega o valor verdadeiro que é 1
 * c = c(0) || 1; -> pega o valor verdadeiro que é 1
 * resultando na soma 0 + 0 + 0 = 3
 */
console.log(soma(0, 0, 0));

// Estrategia 2, 3 e 4 para valores padrão
function soma2(a, b, c) {
  //2
  a = a !== undefined ? a : 1;
  //3
  /**
   * 0 in arguments -> parametro a (valor contido nele)
   * 1 in arguments -> parametro b (valor contido nele)
   * 2 in arguments -> parametro c (valor contido nele)
   */
  b = 1 in arguments ? b : 1;
  //4
  // É um número? Se for, c será 1, senão o próprio c
  c = isNaN(c) ? 1 : c;

  return a + b + c;
}
console.log(soma2()); //3
console.log(soma2(3)); // 3 + 1(b padrao) + 1(c padrao) = 5
console.log(soma2(1, 2, 3)); //6
console.log(soma2(0, 0, 0)); //0 (não gerou o bug da estrategia 1)

/**
 * Essas estrategias são trabalhosas e podem causar algum bug, são antigas
 * e não são mais recomendadas hoje em dia
 */

// Valor padrão do ES 2015 (ES6)
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3()); //3
console.log(soma3(3)); // 3 + 1(b padrao) + 1(c padrao) = 5
console.log(soma3(1, 2, 3)); //6
console.log(soma3(0, 0, 0)); //0 (sem bugs logicamente)

