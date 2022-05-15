const http = require('http')
// letra -> letra da turma, pois o que muda nas 3 urls é só a letra, A, B e C
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

// let nomes = []
// agora composição de chamadas usando promises porém ainda não é a melhor abordagem atualmente
/* getTurma('A')
  .then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('B')
      .then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        getTurma('C')
          .then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
          })
      })
  }) */

// forma melhor de fazer composição de chamadas com promise
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  // matriz com 3 elementos que são arrays 
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome)) 
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e))
