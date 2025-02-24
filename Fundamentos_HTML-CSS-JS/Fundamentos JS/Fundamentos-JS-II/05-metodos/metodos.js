// Métodos de Objetos Literais
// Definidos dentro de objetos.

const pessoa = {
  nome: "João",
  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};
pessoa.falar(); // "Olá, meu nome é João"

// Métodos em Prototypes
// Associam funções ao protótipo de um objeto.
function Animal(tipo) {
  this.tipo = tipo;
}
Animal.prototype.som = function() {
  console.log("Faz algum som");
};
const cachorro = new Animal("cachorro");
cachorro.som(); // "Faz algum som"

// Métodos de Classes (ES6)
// Definição moderna de métodos dentro de classes.
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
  buzinar() {
    console.log("Biiii!");
  }
}
const fusca = new Carro("Fusca");
fusca.buzinar(); // "Biiii!"



// Métodos de Arrays
// Métodos nativos úteis para manipulação de arrays.
const numeros = [1, 2, 3, 4];

console.log(numeros.map(n => n * 2)); // [2, 4, 6, 8]
console.log(numeros.filter(n => n % 2 === 0)); // [2, 4]
console.log(numeros.reduce((acc, n) => acc + n, 0)); // 10

// Métodos de Strings
// Manipulam strings de diversas formas.
const texto = "JavaScript";

console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"
console.log(texto.includes("Script")); // true

// Métodos Assíncronos (async/await, Promises)
// Trabalham com operações assíncronas.
async function buscarDados() {
  const resposta = await fetch("https://api.exemplo.com/dados");
  const dados = await resposta.json();
  console.log(dados);
}   






