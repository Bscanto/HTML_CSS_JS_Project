// O QUE SÃO?
// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b)
  return resultado
}

//Referenciar a função vs Chamar a função
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
  console.log("Realizando soma.")
  return x + y
}
calcular(3, 5, somar)
console.log(somar)       // Retorna a própria função
console.log(somar(1, 1)) // Chama a função (retorna o resultado da função)

//Funções anônimas como parâmetros
// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
calcular(9, 2, function (x, y) {
  console.log("Realizando substração.")
  return x - y
})


//Funções anônimas como parâmetros
// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
calcular(9, 2, function (x, y) {
  console.log("Realizando substração.")
  return x - y
})


//Exemplo real
// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

console.log(' ')
console.log(' ')

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
console.log('Forma tradicional')
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
console.log(' ')
console.log(' ')

// Forma funcional
console.log('Forma funcional')
lista.forEach(exibirElemento)

console.log(' ')
console.log(' ')
console.log('Também poderia ser feito')
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})