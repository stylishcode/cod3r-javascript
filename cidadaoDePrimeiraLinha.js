/**
 * Javascript trata função como cidadão de primeira linha
 * É possível passar funções como parametro, retornar funções a partir de
 * outras funções, declarar funções dentro de outras funções, armazenar funções
 * dentro de variáveis.
 * 
 * Existe um conceito em JS que é chamado de First-Class Object/Citizens
 * ou Higher Level Order (Função de alta ordem), essa última é muito usada no
 * mundo funcional
 * 
 * Isso tudo signifca que JS trata função como um dado, e como um dado, ela pode
 * ser passada como parametro, pode ser retornada como resposta de outra função,
 * ela pode ser armazenada como variavel, uma função pode ter outra função dentro dela
 * ... etc
 */

// Criando função de forma literal
function fun1() {}

/**
 *  Armazenando função dentro de variável 
 * (note que uma função anônima está sendo atribuida a variável)
 */
const fun2 = function() {}

// Armazenando função em um array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3)); //5

// Armazenando função em um atributo de objeto
const obj = {};
obj.falar = function () { return 'Olá' };
console.log(obj.falar()); // Olá

// Passando funções como parametro para outras funções
function run(fun) {
  /**
   * Importante ressaltar que quando colocamos parenteses, estamos invocando a função
   * Quando não passamos, somente estamos passando a função, propriamente dita
   * 
   * Ex1: 
   * function hello() { console.log('Hello World') }
   * const ola = hello; -> passando a função, sem invocar
   * hello(); -> agora está sendo invocada
   * 
   * Ex2:
   * function hello() { console.log('Hello World') }
   * const ola = hello(); -> passando a função, já invocando
   * hello; -> Não precisa dos parenteses agora
   */
  fun();
}

run(function() { console.log('Executando...') });

// Uma função pode retornar/conter uma função
// Essa função recebe dois parametros a e b
function soma(a, b) {
  /**
   * Em vez de retornar o resultado, retorna uma outra função 
   * que tem um terceiro parametro C
   */
  return function(c) {
    // Por fim, quando tem os 3 parametros, a, b e c, realiza a soma
    console.log(a + b + c);
  }
}
//chamadaFuncao1(a,b)chamadaFuncao2(c)
soma(2, 3)(4); //(5) + (4) = 9

//Outra forma de fazer
const resultado = soma(2,3); //5
resultado(4); // 5 + 4 = 9

