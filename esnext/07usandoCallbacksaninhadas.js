// sem promise... (o objetivo é motivar o uso de promises, pois o exercicio não vai ficar tão interessante)
const http = require('http')

// letra -> letra da turma, pois o que muda nas 3 urls é só a letra, A, B e C
// callback -> uma callback que será chamada quando o arquivo JSON estiver totalmente carregado
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
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
      callback(JSON.parse(resultado))
    })
  })
}

let nomes = []
// Isso se chama callback hell, callback dentro de callbacks. Com promise é muito mais elegante
/* getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
      console.log(nomes)
    })
  })
}) */
