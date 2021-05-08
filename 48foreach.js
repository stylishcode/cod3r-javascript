const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Nome e indice
aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`));

// Somente o nome
aprovados.forEach(nome => console.log(nome));

/**
 * Somente o indice
 * Para esse, é necessário que o primeiro parametro seja passado, pois o segundo
 * parametro sempre é o indice
 */

aprovados.forEach((_, indice) => console.log(indice));

//armazenando a callback em uma variável
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);
