//CONDICIONAL IF/ELSE

// < menor que
// > maior que 
// == igual
// <= menor igual
// >= maior igual
// !=  diferente


// == verificar se dois valores são iguais em termos de valor
// ===  verificar se dois valores são iguais em termos de valor e tipo de dados. 


let idade = 14;

if(idade >= 18){
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}



let horas = 20;

if ( horas >= 6 &&  horas < 12){
    console.log('Bom Dia!'); // se a a hora estiver entre 6 - 12 o loop encerra aqui!
 } else if ( horas >= 12 && horas < 18){
    console.log('Boa tarde!');// se a a hora estiver entre 12 - 18 o loop encerra aqui!

    } else {
    console.log('Boa noite!');// senao aqui!

    }

//Condicional ternário ( iff em uma linha só)
let isMenber = true;

// condição + (?)  valor certo + (:) valor que foi errado
let shipping = isMenber ? 2 : 10;
console.log("Frete: " + shipping);


//SWITCH...CASE
var tipoUsuario = "Gerente";

switch (tipoUsuario) {
    case "Admin":
      console.log(" Feliz Natal, chefe! ");
        break;
    case "Gerente":
      console.log("Boas festas, meu amigo!");
        break;
    default:
      console.log("Boas festas!");
        break;
}
