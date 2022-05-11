
// Como passar um parâmetro para um módulo?
// A priori você não tem isso, mas se um módulo retorna uma função
// Você pode invocar essa função passando parâmetros e o que tiver dentro será executado
// É assim que se passa parâmetros de um módulo para outro
module.exports = (...nomes) => {
  return nomes.map(nome => `Boa semana, ${nome}`)
}
