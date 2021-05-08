const pai = { nome: 'Pedro', corDoCabelo: 'preto' };

const filha1 = Object.create(pai); // obj filha com prototipo do pai
filha1.nome = 'Ana';
console.log(filha1.corDoCabelo); // preto

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
});
filha2.nome = 'Carla'; // não vai alterar (writable: false)
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`); // Bia tem cabelo preto

/** Exibindo chave dos objetos filhos (não enumera os herdados) */
console.log(Object.keys(filha1)); //['nome']
console.log(Object.keys(filha2)); // ['nome']

//Percorrendo todos os atributos, inclusive herdados
for (let key in filha2) {
  console.log(key);
}

//Verificando se uma propriedade pertence ao objeto ou foi herdada
for (let key in filha2) {
  filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança: ${key}`);
}