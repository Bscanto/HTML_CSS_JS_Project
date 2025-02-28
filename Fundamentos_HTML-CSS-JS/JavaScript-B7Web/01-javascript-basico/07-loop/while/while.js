let numero = 0;
while (numero < 10) {
    console.log('Número ' + numero);
    numero++;
}


let velocidade = 80

while (velocidade > 0) {
  console.log("O carro está a " + velocidade + " km/h")
  velocidade -= 20
  console.log("Diminuindo 20 km/h")
}

console.log("O caroo parou.")


//1. Faça um loop que mostre todas as frutas
let fruits = ['Maça', 'Banana', 'Pera', 'Uva'];

for(let frutas = 0; frutas < fruits.length; frutas++){
    console.log(fruits[frutas]);
}
for( let x in fruits){
    console.log(fruits[x]);
}

//2. Conte de 1 té 100 atráves de um WHILE
let number = 1;

while(number <= 100){
    console.log(number);
    number++;
}