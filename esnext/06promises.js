/** 
 * Promise é uma promessa. Você usa promise quando deseja ter algum tipo de processamento
 * assíncrono.
 * Uma promise tem pelo menos (porque pode ter mais dependendo do caso) destinos:
 * ser resolvida/atendida ou seja a promessa foi cumprida ou então a promessa foi rejeitada.
 * Ex: Digamos que você quer acessar um arquivo remoto. Uma das possibilidades de você acessar
 * esse arquivo é a partir de uma callback, você passa por exemplo a URL, passa uma
 * callback de sucesso e uma callback de erro e caso o arquivo seja obtido de forma bem 
 * sucedida, a callback de sucesso é chamada e caso o arquivo não seja obtido por algum tipo
 * de erro, a callback de erro é chamada, apresentando uma mensagem de erro, alguma coisa que
 * descreva exatamente o problema que aconteceu. Então quando você tem esse cenário usando
 * uma callback, você tem mais ou menos a mesma ideia do que você tem em uma Promise, de ter o
 * sucesso obtendo o arquivo ou você pode ter um erro/problema.
 * 
 * A promise é um estrutura que tem como objetivo representar uma operação assíncrona, que pode ser
 * atendida ou rejeitada dependendo da situação.
 * 
*/

/** 
 * Exemplo usando setTimeout para representar essa ideia do assíncrono, representar essa ideia
 * de uma operação que demora um determinado tempo e quando a resposta chega, ai sim essa promise
 * é resolvida. Nesse caso ela vai ser só resolvida, não será rejeitada porque é um exemplo inicial
*/
// segundos: Segundos a esperar pra falar alguma coisa
// frase: Frase a ser impressa no console. Esse parametro poderia também ser uma callback que seria
// executada depois dos segundos passados
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    // Para simular o delay até a resposta chegar
    setTimeout(() => {
      /** 
       * obs: resolve só recebe um parametro. Caso precisa passar várias coisas,
       * coloque em um objeto ou algo do tipo
       * 
       * Se por acaso aqui fosse passado reject(frase) ao inves de resolve, daria um
       * UnhandledPromiseRejectionWarning porque não tem um .catch() na chamada para casos
       * de rejeição. Isso inclusive é um comportamento deprecated e no futuro, as promises
       * rejeitadas que não forem tratadas irão encerrar o processo do node com um código de
       * saída diferente de zero
       **/
      resolve(frase)
    }, segundos * 1000) // segundos * 1000 -> milissegundos
  })
}

falarDepoisDe(3, 'Hora do comp!!!')
  // Então faça isso
  .then(frase => frase.concat('?!?'))
  // E então faça isso
  // Sempre que termina um then, o resultado (uma promise) dele é passado para outro then e assim por diante 
  .then(fraseDoThenAnterior => console.log(fraseDoThenAnterior))
  // E depois faça mais isso... etc. O then pode ser usado quantas vezes forem necessárias
  // Para tratar rejeições você usa o .catch(e => console.log(e))
