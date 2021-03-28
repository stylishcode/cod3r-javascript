// Exemplo de callback no browser
/**
 * Nesse exemplo, um callback está sendo passado para a função onclick
 * A função callback será chamada sempre que o evento (clique) ocorrer
 */
document.getElementsByTagName('body')[0].onclick = function(e) {
  console.log('O evento ocorreu!');
}

