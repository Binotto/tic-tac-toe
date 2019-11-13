// var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
// var citricos = frutas.slice(1, 3);


// console.log(citricos);


// Usando slice para criar novoCarro a partir de meuCarro.
var meuHonda = { cor: 'vermelho', rodas: 4, motor: { cilindros: 4, tamanho: 2.2 } };
var meuCarro = [meuHonda, 2, 'perfeitas condições', 'comprado em 1997'];
var novoCarro = meuCarro.slice(0, 2);


meuHonda.cor = 'roxo';

console.log(meuCarro);

console.log(novoCarro);