/**
 * Neste exemplo, será usada a função setInterval dentro de uma função e dentro
 * do contexto de setInterval, não será encontrado o this do contexto dessa função
 * E será apresentado duas possibilidades de resolver esse problema
 * Uma usando bind (recomendado)
 * A outra, que é muito encontrada em código javascript, que é armazenar o this
 * dentro de uma constante no momento que o this aponta para o objeto que de fato
 * se deseja referenciar e ai a constante será usada para acessar o this e um determinado
 * momento
 */

function naoEncontraraThis() {
  this.idade = 0;
  /**
   * SetInterval dispara uma outra função em um determinado momento definido
   */
  setInterval(function() {
    /**
     * Esse this já está deixando de apontar para o contexto da função naoEncontraraThis
     * e quem é o dono desse contexto é o temporizador da função setInterval, mas muitas
     * vezes não se tem o conhecimento disso
     */
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new naoEncontraraThis; //NaN de 1 em 1 segundo

function solucaoBind() {
  this.idade = 0;
  setInterval(function() {
    this.idade++;
    console.log(this.idade);
  }.bind(this), 1000);
  /**
   * bind irá amarrar o this do contexto da função solucaoBind a funçaõ setInterval
   * fazendo com que o this dentro de setInterval, aponte de fato para o que era esperado
   * o this de solucaoBind
   */
}

// new solucaoBind; //1, 2, 3, 4....

function solucaoConstante() {
  this.idade = 0;
  /**
   * Como a constante definida está sendo executada diretamente dentro
   * da função solucaoConstante, significa que that é o this é a instância atual que
   * está executando o codigo, no caso, a função solucaoConstante e como é constante
   * não importa quem chame, that sempre será o contexto this da solucaoConstante
   * 
   * Isso não deixa de ser uma artificio tecnologico, uma forma que desenvolvedores fazem
   * para "driblar" esse comportamento de variação do this da linguagem, não é o recomendado
   * mas é uma técnica que é encontrada com frequência em muitos código javascript
   */
  const that = this;
  setInterval(function() {
    that.idade++;
    console.log(that.idade);
  }, 1000);
}

new solucaoConstante; // 1, 2, 3, 4....