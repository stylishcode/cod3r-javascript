function tratarErroElancar(erro) {
  //throw new Error('...');
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado({ name }) {
  try {
    console.log(name.toUpperCase() + '!!!');
  } catch(e) {
    tratarErroElancar(e);
  } finally{
    console.log('Final')
  }
}

/**
 * Final
 * {
  nome: 'TypeError',
  msg: "Cannot read property 'toUpperCase' of undefined",
  date: 2021-03-25T02:40:23.709Z
}
 */
imprimirNomeGritado({ nome: 'Matheus' });
/**
 * MATHEUS!!!
 * Final
 */
imprimirNomeGritado({ name: 'Matheus' });