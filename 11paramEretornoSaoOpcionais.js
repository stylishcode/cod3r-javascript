/**
 * Evitar criar funções que nem essa, que pode dar um console.log e em outro momento
 * retornar um valor... etc. Criar funções com uma única regra, por exemplo, que retorne
 * false se a area > 20 e retorna area se area < 20
 */
function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m².`);
  } else {
    return area;
  }
}

console.log(area(2, 2)); //4
console.log(area(2)); // NaN
console.log(area()); //Nan
console.log(area(2, 3, 17, 22, 44)); //6 e ignora os outros 3 parametros
console.log(area(5, 5)); //Valor acima do permitido: 25m²., undefined (retorno padrão de uma função JS)
