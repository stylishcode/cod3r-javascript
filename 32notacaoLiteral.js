const a = 1;
const b = 2;
const c = 3;

//Antes ES6
const obj1 = {a: a,  b: b, c: c}

//ES6
const obj2 = {a, b, c}

console.log(obj1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

//Funções dentro de objetos
//Antes ES6
const obj5 = {
  funcao1: function() {
    //...
  }
}

//ES6
const obj6 = {
  funcao1() {
  //...
  },
}