console.log(this === global) // false, this no escopo do arquivo aponta para module.exports e exports
console.log(this === module) // false, já explicado acima 

console.log(this === module.exports) // true, já explicado na linha 1
console.log(this == exports) // true, já explicado na linha 1

function logThisFunction() {
  console.log('Dentro de uma função...')
  console.log(this === exports) // false, dentro de uma função, this aponta para global
  console.log(this === module.exports) // false, já explicado acima 
  console.log(this == global) // true, tome cuidado pois dentro de função o this trabalha com escopo global
}

const logThisArrow = () => {
  console.log('Dentro de uma função arrow...')
  console.log(this === exports) // true, porque arrows não tem um this próprio e elas são amarradas ao contexto de chamada, ou seja, nesse caso é o escopo de arquivo e já explicado na linha 1 porque é true 
  console.log(this === module.exports) // true, já explicado acima 
  console.log(this == global) // false
}

logThisFunction()
logThisArrow()
