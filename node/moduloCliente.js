const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloA.ola); // Fala pessoal
console.log(moduloA.bemVindo); // Bem vindo ao node!
console.log(moduloA.ateLogo); // Até o próximo exemplo
// this == exports == module.exports
console.log(moduloA); /**
{
  ola: 'Fala pessoal',
  bemVindo: 'Bem vindo ao node!', 
  ateLogo: 'Até o próximo exemplo'
}
 */
console.log(moduloB.bomDia); // Bom dia
console.log(moduloB.boaNoite()); // Boa noite
console.log(moduloB); // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }