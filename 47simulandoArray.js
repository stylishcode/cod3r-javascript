const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quaseArray); // { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this) },
  enumerable: false
});

// objetos também pode ser acessado pelo indice através de colchetes
console.log(quaseArray[0]); // Rafael

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), meuArray); // [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]