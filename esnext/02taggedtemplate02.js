// partes = ['1x de ', '', 'ou 3x de ', '']
// valores = [29.9, 11]
function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    // resultado.push(partes[0], 'R$29.90')
    // resultado.push(partes[1], 'R$11.00')
    resultado.push(partes[indice], valor)
  })
  // resultado como array = [ '1x de ', 'R$29.90', ' ou 3x de ', 'R$11.00' ]
  // resultado como join (string) = '1x de R$29.90 ou 3x de R$11.00'
  return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
