const http = require('http')
/**
 * Um recurso bem interessa que surgiu no ES8 é o async/await
 * Ele permite que você transforme operações assíncronas em algo que parece síncrono
 * Esse é objetivo do async/await, simplificar o uso de código assíncrono
 * Resumindo: Recurso do ES8, objetivo de simplicar o uso de promises...
 */
const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

  return new Promise((resolve, reject) => {
    http.get(url, res => {
      /**
       * res: resposta. Em cima da resposta que vamos começar a receber os dados. Não existe
       * uma forma de você receber o dado inteiro, então teremos que fazer o controle manual,
       * pois essa resposta retorna uma stream de dados, ou seja, os dados não chegarão todos
       * de uma vez, mas sim de forma parcial e ai pegando esses dados parciais, vamos concatenando
       * e montando o dado completo
       */
      let resultado = ''
      // evento ao receber resposta
      res.on('data', dados => {
        resultado += dados
      })
      // evento de fim de dados
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))
        } catch (e) {
          reject(e)
        }
      })
    })
  })
}
// Exemplo async await
/** 
 * await só pode ser usado em funções marcadas com async
 * 
 * sempre que estiver lidando com funções que retornam uma promise, você pode fazer
 * uso do async await e essa função só vai para o próximo passo se ela estiver resolvida, 
 * estiver com os dados ou se rejeitada, recebendo o erro
 * 
*/
let obterAlunos = async () => {
  /**
   * Em vez de se preocupar chamando o then(), você simplesmente atribui o resultado
   * da função getTurma() a uma constante e isso te permite trabalhar de uma forma
   * mais "síncrona"
   */
  const turmaA = await getTurma('A')
  const turmaB = await getTurma('B')
  const turmaC = await getTurma('C')
  return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
