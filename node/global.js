// console.log(global)

// O uso do objeto global é algo que se deve ter cuidado, pois sempre que se mexe em um objeto
// compartilhado global, as chances de se ter problemas é maior, então o sistema de módulos do Node
// vem justamente para resolver esse problema

// Porém, como nada é absoluto, eventualmente (em cenários de exceção), você pode querer colocar
// por exemplo, algum objeto seu, personalizado, ou algo do tipo
global.MinhaApp = {
  saudacao() {
    return 'Estou em todos os lugares!'
  },
  nome: 'Sistema Legal'
}
// Após isso, significa que uma vez que esse módulo for lido e isso foi de fato adicionado no global
// qualquer outro arquivo do sistema terá acesso a esses atributos
