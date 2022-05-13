/**
 * Map é uma estrutura de dinâmica de chave e valor
 * A diferença entre o Map e objeto (que é chave e valor também) é que o objeto tem
 * como chave apenas um valor literal (um numero literal ou string) e no caso de um Map
 * você pode ter como chave uma função, um número, objeto.. etc. Obviamente o Map não veio
 * pra substituir um objeto porque não tem como, mas ele pode ser útil em algumas situações
 */
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined (pois não é dessa forma que se acessa um Map)
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false

// Declarando um Map e já inicializando
const chavesVariadas = new Map([
  // [chave, valor]
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número']
])

// Exibindo chave e valor
chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

// Está ou não está contido no Map
console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false

// Quantidade de elementos
console.log(chavesVariadas.size) // 2

// Map não aceita chaves duplicadas
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // substitui 123, 'a', pois não pode haver duplicação de chave
console.log(chavesVariadas) // { [Function (anonymous)] => 'Função', {} => 'Objeto', 123 => 'b' }

// Porém aceita valores repetidos sem problema
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) // { [Function (anonymous)] => 'Função', {} => 'Objeto', 123 => 'b', 456 => 'b' }
