let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra'];

let bigFruits = fruits.filter((item) =>{
  return item.length > 4;
});
console.log(fruits);
console.log(' ')

console.log('Novo Array com o filtro');
console.log(bigFruits)

console.log(' ')

let frutas = ['Banana', 'Laranja', 'Maça', 'Pêra', 'uva'];
let ok = frutas.every((value) => {
  return value.length > 3;
});
if(ok) {
  console.log('Todos são maiores que 3');
}else {
  console.log('Não são todos maior que 3');
}

console.log(' ')
console.log('Includes')
if(frutas.includes('uva')) {
  console.log('Tem Uva Sim');
}else {
  console.log('Não tem uva...');
}