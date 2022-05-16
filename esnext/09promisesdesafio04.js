// Desafio: Encapsular a leitura de um arquivo dentro de uma promise
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, data) => {
      resolve(data.toString())
    })
  })
}

lerArquivo(caminho)
  .then(console.log)
