const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
];

const converteParaObj = e => JSON.parse(e);
const apenasPrecos = e => e.preco;

const carrinhoPrecos = carrinho.map(converteParaObj).map(apenasPrecos);

console.log(carrinhoPrecos);