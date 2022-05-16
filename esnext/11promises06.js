function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    // é possível ter um try catch aqui dentro também
    // ai caso tenha um erro, passamos para o erro para o reject dentro do catch
    // então o reject é chamado passando a exceção que foi gerada
    // então o reject irá procurar pelo primeiro tratamento de erro que ele encontrar
    // (se tiver mais de um, ele irá ser tratado pelo primeiro e não irá cair nos outros catches)
    try {
      con.log('temp')
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionarOuNao('Testando...', 0.9) // 90% de chance de erro
  .then(valor => console.log(`Valor: ${valor}`))
  // É possível tratar um erro especifico de um then
  // Isso faz com que o catch não seja chamado, então as linhas abaixo desse then serão executadas 
  // (porém elas não carregam mais nenhuma promise ou seja, sem resposta para retornar) normalmente
  // , a não ser que dê erro e caia no catch
  .then(
    v => consol.log(v),
    err => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro geral: ${err}`))
  // Geralmente o catch é o último a ser chamado (e deve ser assim, exceto quando tem o finally), 
  // porém é possível ter mais thens depois do catch, porém eles também não carregam mais nenhuma
  // promise, assim como na linha do then que tem tratamento especifico
  .then(() => console.log('Fim!'))
