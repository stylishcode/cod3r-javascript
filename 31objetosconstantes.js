/**
 * Por que conseguimos alterar os valores de um objeto constante?
 * Acontece que o que a constante guarda não é o objeto propriamente dito e sim
 * o endereço de memória, que aponta para esse objeto e esse objeto pode ser livremente
 * manipulado
 * 
 * Mas se tentar atribuir um outro valor a constante, seja um outro objeto (que vai estar
 * em outro endereço de memória obviamente), ou qualquer outra coisa, não será possível
 * e dará o erro de tentar atribuir um valor a uma constante
 */

//pessoa -> endereco0x0001 -> Objeto
const pessoa = { nome: 'Matheus' };
pessoa.nome = 'João'; // pode
console.log(pessoa); //{ nome: 'João' }

//pessoa -> endereco0x0002 -> Outro objeto
pessoa = { nome: 'Ana' }; // Não pode
console.log(pessoa); // TypeError: Assignment to constant variable.

/**
 * "Congelando o objeto para não ser alterado (Não gera erro, apenas ignora a
 * tentativa de alteração)
 * 
 * Impede de mudar, adicionar e até excluir atributos do objeto
 * */
Object.freeze(pessoa);
pessoa.nome = 'Maria';
console.log(pessoa.nome); //João (ignorou a mudança de nome para Maria)