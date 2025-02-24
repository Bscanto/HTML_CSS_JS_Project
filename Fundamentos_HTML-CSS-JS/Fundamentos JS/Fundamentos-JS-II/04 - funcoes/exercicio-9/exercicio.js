function calcularAreaTriangulo(){
  const base = prompt("Digite a base do triângulo: ");
  const altura = prompt("Digite a altura do triângulo: ");
  return base * altura / 2
}

function calcularAreaRetangulo(){
  const base = prompt("Digite a base do retângulo: ")
  const altura = prompt("Digite a altura do retângulo: ")
  return base * altura
}

function calcularAreaQuadrado(){
  const lado = prompt("Digite a area do quadrado")
  return lado * lado
}

function calcularAreaTrapezio(){
  const baseMaior = parseFloat(prompt("Digite a base maior do Trapézio: "))
  const baseMenor = parseFloat(prompt("Digite a base menor do Trapézio: "))
  const altura = prompt("Digite a altura do Trapézio: ")
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
  const raio = prompt("Digite o raio do Círculo: ")
  return (3.14 * raio * raio)
}



function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}


function executar(){
  let opcao = ""
do {
  opcao = exibirMenu()
  let resultado

  switch (opcao) {
    case "1":
     resultado = calcularAreaTriangulo()
      break;

    case "2":
      resultado = calcularAreaRetangulo()
      break;

      case "3":
        resultado = calcularAreaQuadrado()
      break;

      case "4":
        resultado = calcularAreaTrapezio()
      break;

      case "5":
        resultado = calcularAreaCirculo()
      break;


    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
      break
  }

  if (resultado) {
    alert("Resultado: " + resultado)
  }

} while (opcao !== "6");
}


executar()