/**
  * A palavra reservada this seria uma forma de referênciar o objeto atual de uma execução
  * O this acessa quem é o dono do código que está sendo executado naquele momento
  * Com o this é possível acessar atributos do proprietário daquele contexto executado, seja
  * uma classe, objeto, função.. etc
  * 
  * Em linguagens como Java, o this é o Objeto, mas em Javascript, o this se comporta de forma
  * diferente, porque ele pode variar, de acordo com quem chamou a função
  * 
  * Com as arrow functions, o this não varia porque na criação da arrow function, o contexto
  * léxico já é "amarrado" ao this e não pode mudar. Já com functions normais, o this pode variar,
  * entretanto tem como mudar isso, atráves de funções bind
  * 
  * Contexto léxico é o contexto onde a função foi escrita
  * 
  * Teste no contexto do browser para ver saidas, esse é o contexto do Node
  * mas com explicações para o contexto do browser
  * 
  * function f1() { console.log(this===window) }
  * f1() -> true (f1 está sendo executado dentro um contexto global (window))
  * 
  * (this varia dependendo de quem chama ele, ao chamar a função com clique)
  * document.getElementsByTagName('body')[0].onclick = f1;
  * Clicando no body da página (teste na parte branca da home page do google)
  * O resultado de f1 será false, porque o this já variou o contexto e não é mais
  * o objeto global
  * 
  * function f2() { console.log(this===document) }
  * f2() -> false (no contexto global, this não aponta para document)
  *  
  * (Testando para ver se o contexto testado anteriormente é o document)
  * document.getElementsByTagName('body')[0].onclick = f2;
  * Clicando no body da página, será retornado falso novamente, então o contexto
  * a partir do clique também não é o document
  * 
  * (Testando para ver o contexto anterior é o próprio body)
  * const body = document.getElementsByTagName('body')[0];
  * function f3 () { console.log(this===body) }
  * document.getElementsByTagName('body')[0].onclick = f3;
  * Clicando no body da página, será retornado verdadeiro, ou seja, o contexto
  * a partir do clique, é o próprio elemento que está sendo clicado, no caso, o body
  * 
  * Sobre arrow functions
  * Existiram dois motivos para se criar arrow functions, o primeiro é o de diminuir a
  * sintaxe e o segundo é o fato de ter um this que não varia. 
  * 
  * const f4 = () => console.log(this===window)
  * document.getElementsByTagName('body')[0].onclick = f4;
  * Ao clicar no body, o resultado retornado será verdadeiro, quando que em uma função normal
  * o resultado estava sendo falso, ou seja, this continua sendo window, mesmo no contexto
  * de clique no body. Isso acontece porque em arrow functions o this é definido no contexto
  * em que a função é criada, o que é chamado de this léxico (contexto que a função é escrita)
  */

