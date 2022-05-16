/** 
 * Como fazer quando você precisar chamar várias promises ao mesmo tempo mas você quer
 * chamar o then só quando todas estiverem resolvidas? Exemplo abaixo
*/

function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    setTimeout(() => {
      const aleatorio = parseInt(Math.random() * (max - min - 1) + 1)
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 4000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 3000),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 1500)
  ])
}

// Ele só vai trazer os resultados depois que todas as promessas forem cumpridas
// Independente do tempo. No caso ele vai demorar 4 segundos porque é a promise que mais
// vai demorar pra resolver é a primeira no array de promises dentro do Promise.all da função
// acima
console.time('tempo gasto') // label para o timer
gerarVariosNumeros()
  .then(console.log)
  .then(() => console.timeEnd('tempo gasto'))
