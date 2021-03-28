const valor = 'Global';

// função escrita diretamente no arquivo, esse é seu contexto léxico, no módulo do node
function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = 'Local';
  /**
   * Uma função em javascript não tem apenas o seu conteúdo interno, o seu nome,
   * os parametros que ela recebe, aquilo que ela retorna. Ela também tem consciência
   * do local que ela foi definida, então a função carrega consigo o contexto no qual ela
   * foi declarada, então embora ela esteja sendo chamada em outro local, embora ela esteja
   * sendo passada como parametro para outra função bem longe do local em que ela foi definida,
   * ela sabe onde foi definida.
   * 
   * Então ela vai procurar primeiro dentro do escopo léxico, então se ela não achou no local, ela vai
   * pro escopo mais abrangente (não é o escopo de execução dela (dentro da função exec) e sim dentro do corpo dela),
   * sendo assim, ela não encontrou valor dentro dela, foi pro escopo mais abrangente e encontrou o valor Global
   */
  minhaFuncao(); //global
}

exec()