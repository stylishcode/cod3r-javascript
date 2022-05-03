Array.prototype.meuReduce = function(callback, valorInicial) {
  // Se for passado o valor o inicial, o indice inicial do for será 0 se não 1
  const indiceInicial = valorInicial ? 0 : 1;
  // Acumulador recebe this[0] ou se tiver sido passado, o indice inicial
  let acumulador = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    // callback(acumulador, nums[i], i, nums)
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
}

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.meuReduce(soma, 21));
