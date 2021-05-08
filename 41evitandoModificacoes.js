/**
 * Object.preventExtensions
 * 
 * Ele vai prevenir, impedir que novos atributos sejam adicionados ao objeto
 * Pode até excluir, mas não aumentar o número de atributos
 */
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log(`Extensível: ${Object.isExtensible(produto)}`); // false

produto.nome = 'Borracha'; // permitido alteração
produto.descricao = 'Borracha escolar branca'; // não permite adição de atributos (vai ser ignorado)
delete produto.tag; // permite exclusão
console.log(produto); // { nome: 'Borracha', preco: 1.99 }

/**
 * Object.seal
 * 
 * Não permite adicionar nem excluir atributos
 * Permite modificar
 */
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log(`Selado: ${Object.isSealed(pessoa)}`); // true

pessoa.sobrenome = 'Silva'; // ignorado
delete pessoa.nome; // ignorado
pessoa.idade = 29; // permite alteração
console.log(pessoa); 