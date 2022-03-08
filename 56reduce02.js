const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Ana', nota: 9.8, bolsista: false},
  {nome: 'Pedro', nota: 8.7, bolsista: true},
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (alunosAnteriores, alunoAtual) => alunosAnteriores && alunoAtual;
const resultado = alunos.map(a => a.bolsista).reduce(todosBolsistas);
console.log(resultado); // false

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (alunosAnteriores, alunoAtual) => alunosAnteriores || alunoAtual;
const resultado2 = alunos.map(a => a.bolsista).reduce(algumBolsista);
console.log(resultado2);
