const sequencia = {
  _valor: 1, //convenção de atributo privado, respeite
  get valor() { return this._valor++ },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  }
}

/**
 * Não precisa chamar get valor() (nem aparece essa opção)
 * Ele já entende que o valor vai ser acessado pelo get
 */
console.log(sequencia.valor, sequencia.valor); // 1 2
/**
 * Mesma coisa com o set
 * Ele já entende que o valor vai ser setado pelo set
 */
sequencia.valor = 1000;

console.log(sequencia.valor, sequencia.valor); //1001 1002