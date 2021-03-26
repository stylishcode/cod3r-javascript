const pessoa = {
  saudacao: 'Bom dia',
  /**
   * Recurso novo para criação de funções dentro de objetos
   * Alternativa a essa forma:
   * falar: function () { }
   */
  falar() {
    //console.log(saudacao); // incorreto (saudacao is not defined)
    /**
     * correto (acessando saudação do objeto no qual é o dono da função falar,
     * que no caso é o objeto pessoa)
     */
    console.log(this.saudacao); 
  }
}

pessoa.falar(); // Bom dia (chamada no contexto de pessoa)

/**
 * O efeito colateral dessa atribuição é que saudação deixa de apontar para o contexto
 * this do objeto pessoa e objeto que está sendo apontado a partir dessa atribuição e chamada
 * não tem saudação dentro dele e o resultado será undefined
 * 
 * Isso é um conflito entre o paradigma funcional e OO, porque o fato de armazenar uma função
 * em uma variável, faz com que a função falar não esteja sendo chamada a partir do contexto
 * de pessoa, falar, sendo chamado diretamente do contexto node, faz com que ela esteja em outro
 * contexto, por isso o problema do undefined, não existe saudação nesse contexto
 */
const falar = pessoa.falar
falar(); // undefined (chamada no contexto do node)

/**
 * Esse problema pode ser resolvido usando a função bind, que recebe um objeto
 * no qual queira que seja resolvido o this
 * 
 * O objeto pessoa passado dentro da função bind, significa que sempre, a partir da função
 * bind, o this será resolvido para pessoa
 * 
 * Resumindo, o bind é o método responsável por "amarrar" um determinado objeto,
 * para ser o dono da execução de um método, sempre que ele for chamado, ou seja, sempre
 * que a função for chamada, o this será o objeto passado para o bind
 * 
 * Importante ressaltar que o método pessoa.falar não foi alterado pela função bind
 * e sim, um novo método foi retornado pela função bind, que ai sim, está amarrada a objeto
 * pessoa, independente da forma como ela seja chamada
 */

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia (chamada no contexto do node, mas o this está no contexto de pessoa)