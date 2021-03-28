// Conceito de null
const a = {name: 'Teste'};
/* Atribuição por referência 
  (a e b apontam para o mesmo endereço de memória do objeto criado) 
*/
const b = a;

let c = 3;
/*  
  Atribuição por valor
  (Como c é um tipo primitivo, d copia o valor e não o endereço de memória)
*/
let d = c;

b.name = "Opa";
/* 
  Como b aponta para o mesmo endereço de memória de a, alteração atráves de b
  refletiu no a, porque estamos trabalhando com o mesmo objeto
 */
console.log(a.name); // Opa

/* Como a atribuição é por valor, por c ser primitivo, cada um tem seu valor */
console.log(d++); //4
console.log(c); //3

/* 
  Variável "Vazia", não aponta para um endereço de memória
  Sempre use null para tipos não primitivos, nunca use undefined para zerar
  uma variável, deixe que a linguagem defina undefined quando tiver que definir
*/
const nula = null;

// Conceito de undefined
let valor;
console.log(valor); //undefined (Variável declarada, mas não inicializada)
console.log(valor2); // error: not defined (Variável não foi declarada)

valor = null;
/* Erro quando tentamos acessar alguma propriedade de null */
console.log(valor.toString); // typeError: cannot read property toString of null

const produto = {};
console.log(produto.preco); // undefined
console.log(produto.preco.a); // typeError: cannot read property a of undefined