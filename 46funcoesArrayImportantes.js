const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
// Remove ultimo elemento do array
pilotos.pop()
console.log(pilotos); //[ 'Vettel', 'Alonso', 'Raikkonen' ]

// Adiciona elementos no array
pilotos.push("Verstappen");

// Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos); //[ 'Alonso', 'Raikkonen', 'Verstappen' ]

// Adiciona elementos na primeira posição do array
pilotos.unshift('Hamilton');
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

/**
 * Método splice
 * Adiciona elementos em um determinado indice
 * Exclui elementos de um array
 * Remove e adiciona elementos ao mesmo tempo
 */
//adicionar, começando no indice 2, sem excluir ninguem (0), adicionar Bottas e Massa
pilotos.splice(2, 0, 'Bottas', 'Massa'); 
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

//remover, começando no indice 3, removendo apenas 1 (no caso o proprio 3)
pilotos.splice(3, 1); 
console.log(pilotos); //[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

/**
 * Gera um novo array, começando do indice especificado, 
 * um "pedaço" até o final -1 (não pega o ultimo elemento) do array
 * 
 * slice(2) -> indice 2 até o array.length - 1 (não pega o ultimo elemento)
 * slice(1, 4) -> indice 1 até o array.length -1
 */
const algunsPilotos = pilotos.slice(1, 4);
console.log(algunsPilotos);