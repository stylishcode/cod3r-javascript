// middleware pattern (chain of responsability)
/**
 * contexto: é um objeto, que vai sendo passado de um passo para outro ou seja,
 * de um middleware para o outro e nesse caso esse objeto é importa, pois é ele
 * que carrega os dados de um passo para o outro, então em determinado passo
 * você pode adicionar um determinado atributo, por exemplo, no primeiro passo,
 * você vai obter a lista de produtos do banco de dados, ai você pega a lista e coloca
 * no contexto e no próximo passo, o contexto já estará preenchido com a lista de atributos
 * e você pode filtrar a lista dos produtos vencidos e no próximo você pode enviar um relatório
 * pra alguém para fazer algo algum tipo de tratamento dos produtos vencidos da empresa
 * 
 * next: é uma função, que quando chamada, dispara o próximo passo na cadeia
 */
const passo1 = (contexto, next) => {
  contexto.valor1 = 'mid1'
  next()
}

const passo2 = (contexto, next) => {
  contexto.valor2 = 'mid2'
  next()
}
/**
 * Algumas situações, você quer que o middleware não chame o próximo passo
 * Então, você não é obrigado a declarar os dois parâmetros, que seria forma completa
 * da função middleware
 */
const passo3 = contexto => contexto.valor3 = 'mid3'

// Função que executa os middlewares
/**
 * Pequeno teste de mesa:
 * Na linha 12 a função exec é chamada recebendo um contexto, que é um objeto e ...middlewares,
 * que no caso são 3 funções, passo1, passo2 e passo3
 * 
 * Na linha 41 abaixo desse comentário, você pode ver a declaração dessa função, que recebe como
 * parâmetros, o que citei acima
 * 
 * Na linha 42 é criada uma função chamada execPasso que recebe um índice númerico
 * Na linha 43 temos o corpo de execPasso que:
 * 1 - verifica se middlewares está setado, ou seja, se recebeu algo (retorna true se tiver)
 * 2 - verifica se o indice númerico é menor que o total de middlewares passados como argumento
 * da função exec
 * 3 - Se os itens 1 e 2 acima forem verdadeiros, no array middlewares, é chamado a funcão
 * na posição indice (primeira vez vai ser 0) e ela recebe como argumento o objeto contexto que
 * é passado na chamada de exec e o next, que é um função que chama recursivamente execPasso, incre
 * mentando o indice, para um ...middlewares com 3 funções, será incrementado de 0 para 1 e de 1 para 2 (3 vezes)
 * 4 - execPasso é chamada a primeira vez passando o índice 0 que é para dar ínicio a ela
 * 
 *  Exemplo desse código:
 *  middlewares[0] = passo1({valor1: 'mid1'}, () => execPasso(0 + 1))
 *  middlewares[1] = passo2({valor1: 'mid1', valor2: 'mid2'}, () => execPasso(1 + 1))
 *  middlewares[2] = passo3({valor1: 'mid1', valor2: 'mid2', valor3: 'mid3'})
 * 
 *  retorna { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }
 */
const exec = (contexto, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length &&
      middlewares[indice](contexto, () => execPasso(indice + 1)) // recursividade
  }
  execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)

console.log(contexto)
