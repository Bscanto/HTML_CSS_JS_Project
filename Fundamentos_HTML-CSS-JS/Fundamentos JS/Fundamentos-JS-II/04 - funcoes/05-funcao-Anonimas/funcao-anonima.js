//  Funções como valores no javascript

// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
  return a + b
}
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
const operacao = somar
console.log(operacao(4, 5))




// Função anônima atribuída a uma variável
const soma = function(a, b) {
  return a + b;
};

// Usando a função anônima
console.log(soma(4, 5)); // Output: 9

// Função anônima como callback
setTimeout(function() {
  console.log('Executado após 1 segundo');
}, 5000);