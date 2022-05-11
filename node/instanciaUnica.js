// Quando um módulo é importado, por padrão ele é cacheado
// ou seja, você sempre está trabalhando com a mesma instância
module.exports = {
  valor: 1,
  inc() {
    this.valor++
  }
}
