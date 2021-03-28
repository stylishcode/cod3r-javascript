/**
 * IIFE -> Immediately Invoked Function Expression
 * Função que já é invocada, mesmo sendo anômima, na hora da sua declaração
 * Essa é uma boa estrategia para fugir do escopo global porque na hora que o código
 * é executado, aquela função é lida e já executada e todos os atributos dela são de escopo
 * local
 */

(function() {
  console.log('Será executado na hora!');
  console.log('Foge do escopo mais abrangente');
  console.log('Tudo o que for criado aqui, não irá tocar o escopo global');
})();