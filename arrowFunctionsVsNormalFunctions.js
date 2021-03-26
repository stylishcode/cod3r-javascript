/**
 * Função normal que compara um parametro com this
 * Esse parametro vai ser o global, module.exports e o próprio this
 */
let comparaComThis = function (param) {
  console.log(this === param);
}
/**
 * No contexto de uma função normal, this é estritamente igual ao objeto global
 * Então deve-se ter cuidado na hora de chamar o this e atribuir um determinado
 * atributo para esse this dentro do escopo de uma função normal, porque estará
 * lidando com o escopo global
 */
comparaComThis(global); // true

/**
 * Já se sabe que é possível mudar o contexto de uma função normal com a função
 * bind e passando um objeto para ela
 */
const obj = {}
comparaComThis = comparaComThis.bind(obj);
/**
 * Contexto da função normal deixou de ser o global
 */
comparaComThis(global); //false
/**
 * Contexto da função agora é obj
 */
comparaComThis(obj); // true

/**
 * Testando para ver se o mesmo comportamento se aplica em arrow functions
 */
let comparaComThisArrow = param => console.log(this === param);
/**
 * Ao comparar o this com o parametro global, o resultado agora será falso, diferente
 * da comparação feita usando uma função normal
 * 
 * Se o this for usado dentro de uma arrow function, esse this vai fazer referência 
 * ao objeto que ele já era referência no momento da criação da arrow function, nesse caso
 * no contexto do node, o próprio arquivo, que é o module.exports, que também é o this
 * No browser, seria o window, caso fosse escrita globalmente (não no escopo global). Se
 * a arrow for escrita dentro de um objeto por exemplo, o this vai fazer referência a esse objeto
 */
comparaComThisArrow(global); // false
comparaComThisArrow(module.exports); //true
comparaComThisArrow(this); //true

/**
 * Tentando alterar o contexto this com o bind em arrow functions
 * 
 * Não é possível fazer isso com arrow functions
 */
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); //false