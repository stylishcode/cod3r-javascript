let dobro = function(a) {
  return a * 2;
}

// com arrow functions
dobro = () => {
  return a * 2
}

// retorno implicito
dobro = (a) => a * 2;

//Omitir parenteses dos parametros quando o parametro for unico
dobro = a => a * 2;

console.log(dobro(10));

//Outro exemplo
let ola = function() {
  return 'Olá';
}

// em forma de arrow function
// função sem parametro
ola = () => 'Olá';

// omitindo parametro (ela continua tendo parametro, só que pode ser ignorado), só é uma forma de escrever
ola = _ => 'Olá';

console.log(ola());

/**
 * O this não varia em arrow functions então o exemplo de thisEBinds02
 * poderia ser resolvido facilmente com arrow functions
 */

function encontraraThis() {
  this.idade = 0;
  setInterval(() => {
    /**
     * Como arrow functions definem o this como this léxico, ou seja, contexto
     * da escrita da função, no caso, a arrow function dentro de setInterval
     *  foi escrita dentro de encontraraThis então, dentro de setInterval, 
     * this continua sendo o contexto de encontraraThis
     */
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new encontraraThis; //1, 2, 3, 4...