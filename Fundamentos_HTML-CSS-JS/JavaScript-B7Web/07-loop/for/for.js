// loop FOR
for(let i = 1; i <= 10; i++) {
    console.log('Produto ' + i);
}
console.log(' ');
console.log('LOOP EM ARRAY');
// loop Array
let cores = ['verde', 'amarelo', 'azul', 'branco'];
cores.push('roxo');
for(let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

console.log(' ');

for (let i in cores) { //let i é a chave do array [0], [1], [2], [3]
    console.log(cores[i]);
}

console.log(' ');

for (let cor of cores) { //quero a cor de cores 
    console.log(cor);
}

let color = [
  {nome: 'preto', quantidade:10},
  {nome: 'branco', quantidade:20},
  {nome: 'vermelho', quantidade:30}
];

console.log(' ');
console.log('Objeto dentro do array com loop');
for (let cor of color) {
    console.log(`Nome: ${cor.nome} - Quantidade: ${cor.quantidade}`);
}