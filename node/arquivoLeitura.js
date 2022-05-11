const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Exemplo de forma síncrona
// bbs: Não é interessante trabalhar com arquivos de forma síncrona. Pois é uma operação bloqueante
// ou seja, como essas operações síncronas são jogadas dentro do event loop (não aproveitando o I/O 
// assíncrono), o event loop fica travado esperando a operação de leitura/escrita ser feita
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Exemplo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

// Como o arquivo nesse exemplo é JSON, pode simplesmente fazer assim:
const config = require('./arquivo.json')
console.log(config.db)

// Lendo diretórios
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})
