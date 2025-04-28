function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

 // ul.innerHTML += "<li>Item alterado</li>"; // insere um item "<li>Item alterado</li>"na ul

 //ul.innerHTML = ul.innerHTML +  "<li>Item alterado2</li>"; // insere um item "<li>Item alterado</li>"na ul

 //ul.children[0].innerHTML = "Item alterado!"; // Altera o item filho apagando da memoria e alocando tdo novamente
  
 //ul.children[0].append("(alterado)") // Adiciona texto ao item filho sem renderizar tudo novamente, porem não interpreta html

 let newLi = document.createElement("li");
 newLi.innerText = "Item adicionado";

 ul.appendChild(newLi); // adiciona ao final
 //ul.prepend(newLi); // adiciona ao inicio


}