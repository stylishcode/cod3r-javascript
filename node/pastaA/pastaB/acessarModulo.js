// o correto no require seria ../../moduloA
// porém em Windows e Mac irá funcionar
// mas não em Linux
const moduloA = require("../../moduloa"); // {} Fala pessoal
console.log(moduloA.ola);

// importando saudacao de dentro de node_modules/saudacao (exemplo apenas)
const saudacao = require("saudacao");
console.log(saudacao.ola);

// Usando o padrão que o node procura, o index.js
// Fazendo com que só seja necessário especificar o diretório onde o módulo se encontra
const c = require("./pastaC");
console.log(c.ola2); // Legal

// Usando módulo nativo do node
/* const http = require("http");
http.createServer((req, res) => {
  res.write("Bom dia");
  res.end();
}).listen(8080); */