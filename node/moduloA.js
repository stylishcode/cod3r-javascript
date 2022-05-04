// Exportando algo de dentro de um módulo para ser usado em outros arquivos
// forma 1
console.log(this); // {}
this.ola = "Fala pessoal";
// forma 2
exports.bemVindo = "Bem vindo ao node!";
// forma 3
module.exports.ateLogo = "Até o próximo exemplo";