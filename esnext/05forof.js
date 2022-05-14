// for of em string
for (letra of 'Cod3r') {
  console.log(letra) // C \n o \n d \n 3 \n r
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// iterando nos indices com for in 
for (let i in assuntosEcma) {
  console.log(i)// 0 1 2
}

// for of em array
for (let assunto of assuntosEcma) {
  console.log(assunto) // Map \n Set \n Promise
}

// for of em Map
const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promisse', { abordado: false }],
])

// Tudo 
for (assunto of assuntosMap) {
  console.log(assunto) // [ 'Map', { abordado: true } ] \n [ 'Set', { abordado: true } ] \n [ 'Promisse', { abordado: false } ]
}

// Somente chave
for (assunto of assuntosMap.keys()) {
  console.log(assunto) // Map \n Set \n Promise
}

// Somente valor
for (assunto of assuntosMap.values()) {
  console.log(assunto) // { abordado: true } \n { abordado: true } \n { abordado: false }
}

// Registros de um Map 
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl) // Map { abordado: true } \n Set { abordado: true } \n Promisse { abordado: false }
}

// Mesma coisa do exemplo acima
for (let [ch, vl] of assuntosMap) {
  console.log(ch, vl)
}

// for of em Set
const s = new Set(['a,', 'b', 'c'])
for (let letra of s) {
  console.log(letra) // a \n b \n c
}
