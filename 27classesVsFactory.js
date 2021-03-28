/**
 * Classe
 */
class Pessoa {
  constructor(nome) {
    this.nome = nome;

  }

  falar() {
    console.log(`Meu nome é: ${this.nome}`);
  }
}

/**
 * Function
 */
function Pessoa2(nome) {
  this.nome = nome;
  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Matheus');
p1.falar();

/**
 * Factory
 */
const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é: ${nome}`)
  }
}

const p2 = criarPessoa('João');
p2.falar();

/**
 * Na classe ou functions (mesma coisa, classe é sugar syntax para criar objetos em JS),
 * quando tentamos acessar o this por meio do onclick por ex, ele não consegue acessar
 * porque como o this varia, dependendo de quem chama ele, a variavel nome não existe no escopo do
 * onclick
 * 
 * Já com o factory, como nao tem this, isso não acontece
 * 
 * Ex com classe:
 * document.getElementsByTagName('body')[0].onclick = p1;
 * p1.falar(); // Meu nome é undefined
 * 
 * Ex com factory:
 * document.getElementsByTagName('body')[0].onclick = p2;
 * p2.falar(); // Meu nome é João
 */