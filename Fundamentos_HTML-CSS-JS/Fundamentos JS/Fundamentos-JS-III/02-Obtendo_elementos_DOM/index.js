// No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do DOM através do id:
function show() {
  console.log('Obter um elemento único a partir do seu id');
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

console.log(' ')
  //Também podemos obter elementos a partir de um nome de tag:
  console.log('Obter vários elementos (HTMLCollection) a partir de um nome de tag')
  const liElements = document.getElementsByTagName("li");
  console.log(liElements);
  console.log(' ')



  // Também a partir de uma class:
console.log('Obter vários elementos (HTMLCollection) a partir de uma classe')
  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);
  console.log(' ')




  // Podemos obter uma lista de elementos a partir do atributo name:
console.log('Obter vários elementos (NodeList) a partir do atributo name')
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);
  console.log(' ')



  // E o método mais flexível de todos, através de uma query (semelhante ao que fazemos com o CSS):
  console.log('Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)')
  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);
console.log(' ')


  // Além disso, também é possível obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
  // Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.
  console.log('Obter um elemento a partir de uma query (o primeiro elemento a corresponder)')
  const contact = document.querySelector("#contact-list > li > label");
  console.log(contact);
  console.log(contact.textContent);
}
