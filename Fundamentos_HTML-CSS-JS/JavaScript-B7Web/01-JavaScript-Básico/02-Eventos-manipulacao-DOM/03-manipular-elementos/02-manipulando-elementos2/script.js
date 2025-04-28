function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

  // const newButton = document.createElement('button');
  // newButton.innerText = "botão";
  // ul.before(newButton) // Cria Antes
  // ul.after(newButton) // Cria Depois

  // // AFTER = Depois
  // // Before = Antes

  let newUl = document.createElement('ul');

  for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add " + i; 
    newUl.append(newLi);
  }

  ul.after(newUl);
}