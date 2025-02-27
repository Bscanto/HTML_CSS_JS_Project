// OBJETOS EM JS
//string
let nome = "Canto";
//array
let nomes = ['canto', 'Pedro'];
//objetos
let personagem = {
  nome: 'hook',
  idade: 24,
  pais: 'Brasil'
}
console.log(personagem)
console.log(`${personagem.nome} tem ${personagem.idade} anos e é do ${personagem.pais}`)

//adicionando propriedades  ao objeto
personagem.altura = 1.78
console.log(personagem)


//deletando propriedades
delete personagem.idade
console.log(personagem)



let personagens = {
    nome: 'hook',
    idade: 24, 
    pais: 'Brasil',
    olhos:['azuis', 'verdes'],
    caracteristicas: {
      força: 100,
      magia: 50,
      stamina: 80
    }
  }

console.log(personagens)
console.log(personagens.caracteristicas.magia)
console.log(personagens.olhos[1])

let veiculo = {
  nome:'Carlos',
  idade: 25,
  carros: [
    {marca: 'fiat', modelo: 'uno'},
    {marca: 'ford', modelo: 'ka'}
  ]
}

console.log(veiculo.carros[1].marca)
