/**
 * Diferente de outras linguagens, em que o tipo booleano é somente true ou false
 * Outras aceitam 1 ou 0 para true e false, ou 0 para false e qualquer outro número
 * para verdadeiro.
 * 
 * Mas em javascript, não só true e false, 1 e 0 é aceito para verdadeiro ou falso
 * como outras coisas se comportam como verdadeiro ou falso
 * 
 * Para sabermos se um outro tipo que não seja true ou false, retorna verdadeiro
 * ou falso, usaremos a negação duas vezes (!!), se um ! faz com inverta a lógica
 * !! faz com que a lógica volte ao original e assim sabermos se um tipo que não
 * seja true e false, se comporta como verdadeiro ou falso
 * 
 * Existem situações em que a linguagem vai exigir que naquela contexto, o valor
 * seja verdadeiro ou falso, não precisando do !! ou ! para o tipo, como no caso
 * das estruturas de controle, por exemplo if(1), que já retorna true, sem usar "!!"
 */

let isAtivo = false;
console.log(isAtivo); //false
isAtivo = true;
console.log(isAtivo); //true

isAtivo = 1;
console.log(!!isAtivo); //true

// Tipos que se comportam como verdadeiro
console.log(!!3); //true
console.log(!!-1); //true
console.log(!!' '); //true
console.log(!!'texto'); //true
console.log(!![]); //true 
console.log(!!{}); //true 
console.log(!!Infinity); //true
//(isAtivo = true): não depende se a atribuição deu certo e sim se é resolvido como verdadeiro
console.log(!!(isAtivo = true)); //true 

// Tipos que se comportam como falso
console.log(!!0); //false
console.log(!!''); //false
console.log(!!null); //false
console.log(!!NaN); //false
console.log(!!undefined); //false
//(isAtivo = false): não depende se a atribuição deu certo e sim se é resolvido como falso
console.log(!!(isAtivo = false)); //false

// Operações entre esses tipos
console.log(!!('' || null || 0 || ' ')); // false || false || false || true = true
console.log(('' || null || 0 || 'epa' || 123)); // epa (retorna o primeiro valor verdadeiro encontrado)

// Forma de definir valores padrão com OU
let nome = ''
console.log(nome || 'desconhecido'); // desconhecido
nome = 'Lucas';
console.log(nome || 'desconhecido'); // Lucas

