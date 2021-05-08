Array.prototype.meuMap = function (callback) {
  const arr = [];
  for (let i=0; i<this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
];

const converteParaObj = e => JSON.parse(e);
const apenasPrecos = e => e.preco;

const carrinhoPrecos = carrinho.meuMap(converteParaObj).meuMap(apenasPrecos);

console.log(carrinhoPrecos);

