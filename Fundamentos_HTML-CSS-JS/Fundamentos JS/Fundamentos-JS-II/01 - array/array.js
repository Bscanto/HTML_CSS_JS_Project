console.log('Estrutura de um array ')
let listaDeCompras = ["Açucar", false];
console.log(listaDeCompras);

listaDeCompras[0] = "Arroz";
listaDeCompras[1] = "Feijão";
listaDeCompras[2] = 7;
listaDeCompras[5] = "Batata";
console.log(listaDeCompras);
console.log(' ')
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

// Definindo um array inicial
console.log(' ')
console.log('Definição array inicial:')
const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr); // ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(' ')

//ADICIONANDO ELEMENTOS
// push: Adiciona um elemento ao final do array
console.log(' Adiciona um elemento ao final do array: PUSH')
let tamanho = arr.push("Boromir");
console.log(arr); // ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"]
console.log(tamanho);
console.log(' ')

// unshift: Adiciona um elemento no início do array
console.log(' Adiciona um elemento no início do array: UNSHIFT')
tamanho = arr.unshift("Gollum");
console.log(arr); // ["Gollum", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"]
console.log(tamanho);
console.log(' ')

// REMOVENDO ELEMENTOS
// pop: Remove o último elemento do array e retorna ele
console.log(' Remove o último elemento do array e retorna ele: POP')
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento); // Removido "Boromir"
// ["Gollum", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(' ')

// Shift : Remove elemento no começo do array
console.log(' Remove elemento no começo do array: SHIFT')
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento); // ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']
console.log(' ')

//PESQUISANDO POR UM ELEMENTO
// includes: Verifica se um certo elemento está presente no array
console.log(' Verifica se um certo elemento está presente no array: INCLUDES');
const inclui = arr.includes("Gandalf");
console.log(inclui);
console.log(' ')

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
console.log(' Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array: INDEXOF')
const indice = arr.indexOf("Gandalf");
console.log(indice);
console.log(' ')


//CORTAR E CONCATENAR
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
console.log(' Copia uma parte do array e devolve a parte copiada sem alterar o array original: SLICE')
const hobbits = arr.slice(0, 4);
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);
console.log(' ')


// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
console.log(' Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays): ')
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);
console.log(hobbits);
console.log(outros);
console.log(' ')
console.log(' ')

//SUBSTITUIR ELEMENTOS
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
console.log(' Permite remover elementos em qualquer posição do array e substituir por novos: ')
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);
console.log(' ')
console.log(' ')

//ITERANDO SOBRE OS ELEMENTOS
// Usando o for para percorrer cada elemento do array
console.log('Usando o for para percorrer cada elemento do array');
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
console.log(' ')
