//cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'; // Evite fazer isso
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: 'D' };
/** 
 * attr3 está declarada em pai, mas como ele vai encontrar o attr3 em filho, 
 * não procurara no seu protótipo (pai)
 * */
const filho = { __proto__: pai,  attr3: 'C'};
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // Z A B C

// Herança na prática
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerar(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324, //shadowing (sobreescrita de atributo pai)
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

// definindo os prototipos
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

/** 
 * Ferrari não mostra a função status que herdou, mas herdou e pode ser chamada 
 * A função não mostra o valor porque o método que converte objeto para String não foi usado
 * */
console.log(ferrari); //{ modelo: 'F40', velMax: 324 }
console.log(volvo); // { modelo: 'V40', status: [Function: status] }

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(300);
console.log(ferrari.status());
