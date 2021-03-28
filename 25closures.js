/**
 * Closure é o escopo criado quando uma função é declarada (leia comentário do arquivo 24)
 * Esse escopo permite a função acessar e manipular variáveis externas à função
 */

/**
 * Contexto léxico em ação
 */

const x = 'Global'


function fora() {
  const x = 'Local';
  function dentro() {
    return [x, y];
  }
  const y = 'Local2';
  return dentro;
}

const minhaFuncao = fora();
/**
 * Como funções são closures, ou seja, tem memória do local em que ela foi definida
 * E o escopo que está externo a função, também vai junto, quando a função é acessada,
 * então esse "fechamento", digamos assim, o escopo que envolve a função, vai junto
 * quando se chama a função, e essa memória, a função tem, ela lembra das suas origens,
 * ela tem essa memória do local de onde ela veio
 * 
 * Então o resultado será Local, porque a função, como closure, trouxe ela consigo,
 * ela está no escopo que envolve a função 'dentro' 
 * */
console.log(minhaFuncao()); // [ 'Local', 'Local2' ]