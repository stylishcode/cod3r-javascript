const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
// Retorna um objeto contendo o funcionário com o menor salário
const menorSalario = (funcAnterior, funcAtual) => {
  return funcAnterior.salario < funcAtual.salario ? funcAnterior : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  // Chinesa com menor salários entre as chinesas
  const chinesaComMenorSalario = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
  
  console.log(chinesaComMenorSalario)
})
