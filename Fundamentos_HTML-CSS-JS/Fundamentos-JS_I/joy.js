// Função mágica para transformar a palavra
function transformarString(mensagem) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];

  return mensagem.split('').map((caractere) => {
      if (!/[a-zA-Z]/.test(caractere)) return caractere;

      const codigoAtual = caractere.charCodeAt(0);
      const proximoCodigo = (codigoAtual === 90) ? 65 : 
                            (codigoAtual === 122) ? 97 :
                            codigoAtual + 1;

      let proximaLetra = String.fromCharCode(proximoCodigo);

      
      const ehVogal = vogais.includes(proximaLetra.toLowerCase());
      if (ehVogal) {
          proximaLetra = proximaLetra === proximaLetra.toLowerCase()
              ? proximaLetra.toUpperCase()
              : proximaLetra.toLowerCase();
      }

      return proximaLetra;
  }).join('');
}


const entrada = "hello";
const resultado = transformarString(entrada);
console.log(`Entrada: "${entrada}" \nSaída: "${resultado}"`);
