//OBJETOS 

// É uma estrutura do javascript para se trabalhar com diciomarios chave-valor
// O par chave-valor em um objeto javascript é chamadop de propriedade
    // A chave é como um NOME da propriedade
    // O valor é o VALOR que está armazenando nessa propriedade(semelhante aos valores armazenados em variáveis)
//Diferente dosArrays, seus elementos mnão possuem nenhuma seguencia 
// Uma propriedade também pode ser string, números e boleanos como chave
// uma propriedade pode armazenar qualquer tipo de dado como valor
// Pode ser criado através dfe chaves {} 
let obj = {}
// Suas propriedades e funções podem ser referenciadas por encadeamento com ponto "." ou []
    //objeto.prop = "Olá Mundo!"
    //objeto.executar()


let nome = "prop";
console.log(nome);

let objeto = { };
console.log(objeto);

objeto.prop = "ola, Mundo!";
console.log(objeto);

console.log(objeto.prop);
console.log(objeto[nome]);
console.log(objeto.prop === objeto["prop"]);
console.log(objeto.prop === objeto["pro" + "p"]);
console.log(objeto.prop === objeto[nome]);


let funcao = "log";
console.log(funcao);

console[funcao]("Olá, Mundo!");

const pessoa ={};
console.log(pessoa);

pessoa.nome = "Bruno";
pessoa.idade = 38;

console.log(pessoa);

pessoa.colegas = ["Lucas", "Juliana", "Rafael"];
pessoa.endereco = {
  rua:"Logo Ali",
  numero: 42,
  bairro: "centro"
}

console.log(pessoa);