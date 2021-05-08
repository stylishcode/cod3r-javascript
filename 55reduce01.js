/**
 * A função reduce recebe um callback com os seguintes parametros
 * previousValue ou acumulador -> valor retornado na última invocação da callback
 * (primeiro indice do array) ou o argumento de initialValue, se fornecido
 * 
 * currentValue ou atual -> O elemento que está sendo processado atualmente no array
 * caso não seja passado o initial value, começará do segundo indice do array
 * 
 * indice -> opcional
 * array -> opcional
 * 
 * initialValue -> fora do callback, especifica o valorInicial do acumulador
 */

const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Ana', nota: 9.8, bolsista: false},
  {nome: 'Pedro', nota: 8.7, bolsista: true},
];

// Sem valor inicial
console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual);
  return acumulador + atual;
});
console.log(resultado); // 35

// Com valor inicial
console.log(alunos.map(a => a.nota));
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual);
  return acumulador + atual;
}, 10);
console.log(resultado2); // 45
