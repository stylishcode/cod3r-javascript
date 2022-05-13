// verificando se uma flag qualquer é passada ao rodar o node
const anonimo = process.argv.indexOf('-a') !== -1 // retorna true ou false

if (anonimo) {
  // escreve na saida do terminal
  process.stdout.write('Fala Anônimo!\n')
  // sai do programa ("mata")
  process.exit()
} else {
  process.stdout.write('Informe o seu nome: ')
  // ao ocorrer uma entrada de dados ('data') 
  process.stdin.on('data', data => {
      // converte o buffer que vem em string e remove o enter('\n') do usuário
      const nome = data.toString().replace('\n', '')
      process.stdout.write(`Fala ${nome}!!\n`)
      process.exit()
  })
}
