//AULA FUNÇÕES
//Funções 
function gravidade(){
  console.log('A gravidade do planeta é: ');
  console.log(9.8);
}
//usando a função
gravidade();



function somar(n1, n2){
  var resultado = n1 + n2;
  console.log('Resultado: ' + resultado);
}
somar(10, 15);

//Função 
// ENTRADA -> PROCESSAMENTO -> SAIDA
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
let completo = nomeCompleto("João", "Silva");
console.log(completo);


//AULA FUNÇÕES COM RETORNO CONDICIONAIS
//Função com retorno condicional
function maiorDeIdade(idade){
  if(idade >= 18){
    return true;
  } else {
    return false;
  }
}
let idade = 18;
let verificacao = maiorDeIdade(idade);

if(verificacao){
  console.log('É maior de idade');
}else {
  console.log('É menor de idade');
}

//EXERCICIOS FUNCTION
//===============EXERCICIO 1========================
function calcPct(x , y) {
  return (y / x) * 100;
}

let x = 50;
let y = 10;
let pct = calcPct(x,y);
console.log(`${pct}% de ${x} é ${y}`)
//------------------FIM---------------------


//===============EXERCICIO 2========================
function calcularImovel(metragem, quartos){
  let m2 = 3000;
let preco = 0;

  switch(quartos){
    case 1:
      preco = metragem * m2;
    break;
    case 2:
      preco = metragem * (m2 * 1.2);
    break;
    case 3:
      preco = metragem * (m2 * 1.5);
    break;
    default:

    break;
  }
  return preco;
}

//let metragem = Number(prompt(`Insira a metragem ( em m2): `));
//let quartos = Number(prompt(`Insira a quantidade de quartos: `));
let metragem = 123;
let quartos = 2;
let valor = calcularImovel(metragem, quartos);
//alert(`A casa curta R$ ${valor}`);
console.log(`A casa curta R$ ${valor}`);
//-----------------------FIM---------------------

//===============EXERCICIO 3========================
function validar(usuario, senha){
  if(usuario === 'pedro' && senha ==='123'){
    return true;
  }else {
    return false;
  }
}


let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if(validacao){
  console.log('Acesso condedido.')
}else {
  console.log('Acesso NEGADO!')
}
//-----------------------FIM---------------------





//AULA ARROW FUNCTION
//Arrow Function
/* function somar(x, y) {
return x + y;
}*/

//Arrow function para execução de mais de uma linha 
const soma = (x, y) => {
  return x + y;
}

//Outra forma de declarar de forma reduzida
//const soma = (x, y) => x + y;

console.log('Resultado: ' + soma(10, 5));



//AULA VARIAVEIS DENTRO DE FUNÇÕES 
//Variaveis dentro de Funções
/*
Existem dois tipos de variáveis em JavaScript: globais e locais.
1. "Escopo Global": A variável é acessível em todo o código, fora ou dentro de funções.
2. "Escopo Local": A variável é acessível apenas dentro da função onde foi declarada.
Resumindo
- Se houver uma variável com o mesmo nome tanto no escopo global quanto no local, a função sempre usará a variável "local".
- Caso a variável não exista no escopo local, a função usará a variável global.
*/
let count = 0;
console.log(`Fora da função ${count}`);

function add(){
  //let count = 0;
  count++;
}

add();
add();
console.log(count);


//AULA  FUNÇÔES DENTRO DE  FUNÇÔES
function square(x){
  return x * x;
}

function addSquares(a, b){
  //const square = (x) => x * x;

  let sqrA = square(a);  
  let sqrB = square(b);  
  return sqrA + sqrB;
}

console.log(addSquares(2, 3));