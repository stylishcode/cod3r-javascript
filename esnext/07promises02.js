// Quando temos muitas callbacks aninhadas, se torna um "Callback Hell" e isso motivou a criação das Promises
/* setTimeout(function () {
  console.log('Executando callback')

  setTimeout(function () {
    console.log('Executando callback')

    setTimeout(function () {
      console.log('Executando callback')
    }, 2000)
  }, 2000)
}, 2000) */

// Evitando o callbackHell com promises
function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

// Lindo não?
esperarPor()
  .then(() => esperarPor())
  // usando a referência da outra função nesse último then, como no exemplo 06promises01 no console.log
  .then(esperarPor)
