const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


// MAP
// O método .map() é usado em arrays no JavaScript. Ele cria um novo array com os resultados da aplicação de uma função em cada item do array original.
console.log('----MAP----')
console.log('Metodo sem usar o map:') //Metodo sem usar o map:
const names = []
for (let i = 0; i < personagens.length; i++) {
  names.push(personagens[i].nome)
}
console.log(names)

console.log(' ')
console.log('Metodo usando o map:') //Metodo usando o map:
// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})
console.log(nomes)


console.log(' ')
// Filter
// O método .filter() também é um método utilizado em arrays no JavaScript, mas seu propósito é diferente do .map(). Em vez de transformar os elementos de um array, o .filter() é utilizado para filtrar os elementos com base em uma condição, ou seja, ele cria um novo array com todos os elementos que atendem à condição especificada.
console.log('----Filter----')
console.log('')
console.log('Metodo sem usar o filter:') //Metodo sem usar o filter:
const orcss = []
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcss.push(personagens[i])
  }
}
console.log(orcss)

console.log('')
console.log('Metodo usando o filter:') //Metodo usando o filter:
// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

console.log(orcs)
console.log('')



// Reduce
// O método .reduce() é outro método poderoso em JavaScript usado para reduzir um array a um único valor, aplicando uma função a cada elemento do array. Ele acumula um valor conforme percorre os elementos do array, e no final, retorna esse valor acumulado.
console.log('----Reduce----')
console.log('')
console.log('Metodo sem usar o reduce:') //Metodo sem usar o reduce:

let nivelTotall = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotall += personagens[i].nivel
}

console.log(nivelTotall)



console.log('')
console.log('Metodo usando o reduce:') //Metodo usando o reduce:

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)
console.log(nivelTotal)

console.log(' ')
console.log('Exemplo dividir por raça com reduce...')
const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

console.log(racas) // traz um objeto onde separa e cria outros arrays com a descrição pedida



console.log(' ')
// sort

console.log('----sort----')
console.log('')
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})

console.log(personagens)