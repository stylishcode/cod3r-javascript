/**
 * A função filter, filtra um array e gera um novo array baseado nos requisitos
 * da filtração
 */
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

const isCaro = produto => produto.preco >= 500;
const isFragil = produto => produto.fragil;

let isCarosEfrageis = produtos.filter(isCaro).filter(isFragil);

console.log(isCarosEfrageis);