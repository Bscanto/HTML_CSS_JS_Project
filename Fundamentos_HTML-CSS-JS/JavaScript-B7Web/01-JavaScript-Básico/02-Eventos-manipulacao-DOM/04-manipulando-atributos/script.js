function clicou() {
  const input = document.querySelector("input");

  // .getAttribute('') pega o conteudo do atribuito
  console.log(input.getAttribute("placeholder")); //Digite o que quiser

  //hasAttribute('') ve se tem esse atributo
  if (input.hasAttribute("placeholder")) {
    console.log("Tem Placeholder!");
  } else {
    conmsole.log("Não tem placeholder");
  } //Tem Placeholder!

  // setAttribute('') colocar ou alterar atributo
  const botao = document.querySelector(".botao");

  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    botao.innerText = "Mostrar Senha";
  } else {
    input.setAttribute("type", "text");
    botao.innerText = "Ocultar Senha";
  }
}
