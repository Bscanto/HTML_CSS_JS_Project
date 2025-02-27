//ESTRUTURA DE UM ARRAY

// shift(): Remove o primeiro elemento do array.
// splice(): Modifica o array, adicionando ou removendo elementos em qualquer posição.
// concat(): Junta dois ou mais arrays em um novo array.
// slice(): Retorna uma cópia de uma parte do array sem modificar o original.
// includes(): Verifica se um valor está presente no array.
// indexOf(): Retorna o índice do primeiro elemento encontrado ou -1.
// forEach(): Executa uma função para cada elemento do array.
// map(): Cria um novo array com os resultados de uma transformação.
// filter(): Cria um novo array com elementos que passam em um teste.
// reduce(): Reduz o array a um único valor.
// find(): Encontra o primeiro elemento que satisfaz a condição.
// every(): Verifica se todos os elementos satisfazem a condição.
// some(): Verifica se ao menos um elemento satisfaz a condição.



let colors = ["blue", "red", "green"];
console.log(colors);

let ingredient = [
  'water',
  'flour',
  'yeast',
  'egg',
  'shall'
];

console.log('Total ingredients: ' + ingredient.length);
console.log( ingredient);

//PUSH-
console.log('PUSH - adiciona um item final do array');
ingredient.push('milk');
console.log('Total ingredients: ' + ingredient.length);
console.log( ingredient);


//POP-
console.log('POP - remove o ultimo item do array');
ingredient.pop('milk');
console.log('Total ingredients: ' + ingredient.length);
console.log( ingredient);

//SHIFT-
console.log('SHIFT - remove o primeiro item do array');
ingredient.shift();
console.log('Total ingredients: ' + ingredient.length);
console.log( ingredient);

//EXERCICIOS
let carros = ['BMW', 'Ferrari', 'Mercedes'];
console.log(carros);
let x = 1;
console.log('1. ' + carros[x]);

carros[1]= 'Audi';
console.log(carros);

carros.push('Volvo');
console.log("Lista com VOlvo");
console.log(carros);

console.log("Quantidde de itens na lista");
console.log(carros.length);