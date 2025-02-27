let pessoa = {
  nome: 'Lucas',
  sobreNome: 'Santos',
  idade: 25,
  nomeCompleto: function() { // A Função vai retornar o nome completo
    return this.nome + ' ' + this.sobreNome;
  }
}

console.log(pessoa.nome + ' ' + pessoa.sobreNome);
console.log(pessoa.nomeCompleto()); //Usando a função dentro do objeto