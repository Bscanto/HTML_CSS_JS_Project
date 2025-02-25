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