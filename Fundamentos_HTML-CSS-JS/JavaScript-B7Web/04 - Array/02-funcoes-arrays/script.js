let frutas = ['Maça', 'Banana', 'Pera', 'Uva'];

console.log(frutas);
console.log(frutas.length); // tamanho do array

console.log(' ');  
console.log(' push');
frutas.push('Laranja'); // adiciona um elemento no final do array
console.log(frutas);    

console.log(' ');  
console.log(' pop');
frutas.pop(); // remove o último elemento do array
console.log(frutas);

console.log(' ');  
console.log(' shift');
frutas.shift(); // remove o primeiro elemento do array
console.log(frutas);

console.log(' ');  
console.log(' unshift');
frutas.unshift('Laranja'); // adiciona um elemento no início do array
console.log(frutas);

console.log(' ');  
console.log(' altera o valor do elemento ');
frutas[0] = 'Morango'; // altera o valor do elemento
console.log(frutas);  

console.log(' ');  
console.log(' splice');
frutas.splice(1, 1); // remove um elemento do array
console.log(frutas);
frutas.splice(1, 0, 'Banana'); // adiciona um elemento no array