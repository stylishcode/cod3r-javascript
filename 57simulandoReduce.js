Array.prototype.meuReduce = function(callback) {
  let acumulador = this[0];
  for (i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
}

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5];
console.log(nums);
