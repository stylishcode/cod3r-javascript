// tagged templates - processa o template dentro de uma função
// partes é um array que trás as partes da string
// valores é um array que trás os valores de interpolações
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

/**
 * ['', ' está ', ''] os '' é onde as interpolações ficam, são as partes da string 
 * ['Gui', 'Aprovado'] Gui é o que fica no primeiro '' e Aprovado é o que fica no '', são os valores
 */
console.log(tag `${aluno} está ${situacao}`)
