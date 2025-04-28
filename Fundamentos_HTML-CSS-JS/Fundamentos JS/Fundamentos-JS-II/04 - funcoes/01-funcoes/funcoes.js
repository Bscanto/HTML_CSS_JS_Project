// É uma estrutura do JavaScript que permite declarar um procedimento e executá-lo programaticamento
//Uma função pode ser vista como: ENTRADA -> PROCEDIMENTO -> SAÍDA
//Tanto a entrada quanto a saída de uma função são OPCIONAIS, ou seja, uma função pode existir sem um deles ou sem ambos.
// As entradas da função são chamadas de PARÂMETROS, As saída da função são chamadas de RETORNOs

//Sintaxe de uma função:
function nomeDaFuncao(entrada){
  //PROCESSAMENTO...
  return saida;
}

function ola(){
  console.log("Olá, Mundo!");
}
// Executando a função
console.log("Executando a função")
ola();






//PARAMETRO DE UMA FUNÇÃO
// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função mas que é informada na hora de chamar a função
function dobro(x){
  alert("O dobro de " + x + " é " + (x * 2));
}
// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
//dobro()

dobro(5);
//dobro(7);

// Valor padrão para os parâmetros
// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()

// É possível ter vários parâmetros
// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
  console.log(a + b)
}
soma(1, 1)
soma(34, 5)

// A ordem dos parâmetros é importante
// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { 
    nome, // mesma coisa que nome: nome
    email, 
    senha, 
    tipo }
  console.log(usuario)
}

function novoUsuario(nome, email, senha, tipo = "Admin") {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")


// Funções com muitos parâmetros
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
 //...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const usuario = {
  nome: "a",
  telefone: "a",
  email: "a",
  senha: "a",
  endereco: "a",
  aniversario: "a"
}

parametrosDoJeitoCerto(usuario);

