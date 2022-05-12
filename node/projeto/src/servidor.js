const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

const porta = 3003

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (request, response, next) => {
  response.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
  response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
  const { nome, preco } = request.body
  response.send(bancoDeDados.salvarProduto({nome, preco}))
})

app.put('/produtos/:id', (request, response, next) => {
  const { id } = request.params
  const { nome, preco } = request.body
  response.send(bancoDeDados.salvarProduto({ id: parseInt(id), nome,preco }))
})

app.delete('/produtos/:id', (request, response, next) => {
  const produto = bancoDeDados.excluirProduto(request.params.id)
  response.send(produto)
})

app.listen(porta, () => {
  console.log(`Server running at http://localhost:${porta}`)
})
