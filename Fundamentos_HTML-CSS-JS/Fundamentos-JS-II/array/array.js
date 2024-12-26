let listaDeCompras = ["Açucar", false]
console.log(listaDeCompras)

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Feijão"
listaDeCompras[2] = 7
listaDeCompras[5] = "Batata"
console.log(listaDeCompras)

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
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr); // ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]





//ADICIONANDO ELEMENTOS
// push: Adiciona um elemento ao final do array
let tamanho = arr.push("Boromir");
console.log(arr); // ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"]
console.log(tamanho)

// unshift: Adiciona um elemento no início do array
tamanho = arr.unshift("Gollum");
console.log(arr); // ["Gollum", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"]
console.log(tamanho)






// REMOVENDO ELEMENTOS
// pop: Remove o último elemento do array e retorna ele
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento); // Removido "Boromir"
 // ["Gollum", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Shift : Remove elemento no começo do array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento) // ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']





//PESQUISANDO POR UM ELEMENTO
// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)





//CORTAR E CONCATENAR
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)




//SUBSTITUIR ELEMENTOS
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)






//ITERANDO SOBRE OS ELEMENTOS
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}