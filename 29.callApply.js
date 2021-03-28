/**
 * Então, as duas principais diferencias que você precisar entender sobre o uso do bind() e o call() e apply() são:

1- Com o bind() você muda o contexto de execução da função, mas sem invocá-la imediatamente, exemplo:
*/

const pessoa = {
  saudacao: 'Hello World',
  
  falar() {
    console.log(this.saudacao)
  }
}
 
const pessoa2 = {
  //Atribuindo a referência do método pessoa.falar() para o  pessoa2.falar()
  falar: pessoa.falar.bind(pessoa)
}
 
pessoa2.falar() //retorna 'hello World'


/**
 * Perceba no exemplo que ao passar pessoa.falar.bind(pessoa) a função 
 * não está sendo invocada imediatamente, mas sim sendo passada como 
 * referência para o atributo falar do objeto pessoa2 .

2 - Já com o call() e o apply() você pode mudar o  contexto de execução 
da função no momento que estive invocando a mesma.
*/

const pessoa = {
  saudacao: 'Olá pessoa',
 
  falar() {
    console.log(this.saudacao)
  }
}
 
const pessoa2 = {
  saudacao: 'Olá pessoa2'
}
//contexto sendo mudado no momento da invocação da função.
pessoa.falar.apply(pessoa2)
pessoa.falar.call(pessoa2) 

/**
 * Perceba que no segundo caso, tanto o call como o apply só iram  mudar o 
 * contexto da função quando ela for invocada de fato.

Resumindo: Portando a principal diferença esta que com o bind você muda 
previamente o contexto de função, enquanto que com o call e apply o contexto 
só irá mudar quando a função for invocada.
*/

