// usando notação literal
const obj1 = {}
console.log(obj1); //{}

// Object em JS
const obj2 = new Object; // com ou sem parenteses, é a mesma coisa
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desconto) {
  // Público
  this.nome = nome;
  // preco e desconto ficarão encapsulados
  this.getPrecoComDesconto = () => preco * (1 - desconto);

}
const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);