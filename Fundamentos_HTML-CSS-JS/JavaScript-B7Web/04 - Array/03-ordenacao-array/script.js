let fruits = ['Maça', 'Banana', 'Pera', 'Uva'];

console.log(' Ordena o array em ordem alfabética ')
fruits.sort();  // Ordena o array em ordem alfabética
console.log(fruits);


console.log(' ordena o array na ordem inversa ')
fruits.reverse();  //  ordena o array na ordem inversa
console.log(fruits);

console.log(' ')

let cars = [
  {brand: 'Fiat', year: 2022},
  {brand: 'Volkswagen', year: 2023},
  {brand: 'Ford', year: 2021},
  {brand: 'Chevrolet', year: 2020},
]

console.log(' Ordena o array de objetos por ano ')
cars.sort((a, b) => a.year - b.year);  // Ordena o array de objetos por ano
console.log(cars);