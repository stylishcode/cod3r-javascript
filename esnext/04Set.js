/**
 * Set é uma estrutura de conjunto não indexada que não aceita repetição
 * No caso, um array é uma estrutura indexada e um objeto também é uma estrutura indexada
 * mas não com números e sim com textos e você tem como pergar um atributo a partir de um identi
 * ficador e no caso do array atráves de um índice numérico
 */
const times = new Set()
times.add('Vasco')
// Aceita chamadas encadeadas
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // ignorado, pois já existe nesse Set

console.log(times) // Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
// Tamanho
console.log(times.size) // 5
// Está contido dentro do Set? 
console.log(times.has('Vasco')) // true
// É case-sensitive
console.log(times.has('vasco')) // false
// Excluindo um elemento
console.log(times.delete('Flamengo'))
console.log(times.has('Flamengo')) // false

// Criando um Set já com valores
const nomes = ['Lucas', 'Raquel', 'João', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // Set(3) { 'Lucas', 'Raquel', 'João' }
