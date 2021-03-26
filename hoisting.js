/* 
  * Hoisting é a elevação das funções para o topo do escopo do programa.
  * Tanto de funções literais, quanto funções de variáveis
*/
function hoisting() {
  let a = 2;
  let b = 3;

  /* 
    * Essa chamada irá funcionar porque inside na linha 12 será 
      elevada para o topo do escopo do programa 
  */
  inside();
  /*
    * Quando uma função é atribuida a uma variável, ela ainda é elevada para cima
      mas como 'undefined' (let inside2 = undefined). O ponto de definição continua
      no mesmo local (linha 25)
  */
  inside2();

  function inside() {
    console.log('This is a example');
  }

  let inside2 = function () {
    console.log('This is a 2nd example');
  }

}

console.log(hoisting());