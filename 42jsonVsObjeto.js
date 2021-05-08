const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
/**
 * Convertendo objeto para formato textual JSON
 * Vale ressaltar que como JSON é um formato de dados e não de execução,
 * são dados que estão trafegando de uma aplicação para outra, são dados que 
 * podem ser armazenados em um arquivo de configuração e algo do tipo, então
 * a função soma não vai ser adicionada a essa conversão
 */
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3}

//Convertendo um formato textual JSON para objeto
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); // forma errada
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); // forma errada 
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // forma correta
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')); // outras possibilidades