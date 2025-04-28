
function soltou(e) {
  console.log('TECLA APERTADA: ' + e.code)
  console.log('SHIFT? ' +  e.shiftkey)
  console.log('--')
}

//evento onkeydown evento de apertar a tecla
//evento onkeypress evendo de segurar uma tecla do teclado
//evento onkeyup evendo de soltar uma tecla do teclado

const input = document.querySelector('input')
document.addEventListener('keyup', soltou);