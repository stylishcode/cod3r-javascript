// Para driblar a Instância Única: Se você quiser importar um módulo
// que toda vida um novo objeto seja gerado, você pode usar para resolver isso
// A função factory (factory method design pattern)
module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}
