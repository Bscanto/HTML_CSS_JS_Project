/*
## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.
__________________________________________________
1. Criar a Estrutura HTML
Primeiro, precisamos da estrutura básica da página, que inclui:

Um input para o nome do desenvolvedor.

Um botão para adicionar tecnologias.

Um botão de cadastrar.

Um local onde as tecnologias serão adicionadas dinamicamente.

Pergunta: Você quer que eu escreva o HTML inicial para você ou prefere tentar e me mostrar?
_____________________________________________________
2. Criar o Script JS e Adicionar Eventos
Precisamos adicionar eventos para:

Capturar o clique no botão de adicionar tecnologia.

Criar dinamicamente os inputs necessários.

Criar um botão para remover a tecnologia.

Tarefa: Como você imagina fazer isso? Podemos começar com um addEventListener no botão de adicionar tecnologia.
__________________________________________________________
3. Remover uma Linha de Tecnologia
Cada linha de tecnologia deve ter um botão de remover que, ao ser clicado, apaga apenas essa linha.

Tarefa: Como podemos identificar qual linha deve ser removida?
_________________________________________________________
4. Cadastrar o Desenvolvedor
Quando o usuário clicar no botão "Cadastrar":

Capturamos os dados do formulário.

Salvamos as informações em um array.

Limpamos o formulário.
*/

const devs = [];
      
function addTech() {
    const ul = document.getElementById('techList')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Adicionar Tecnologia: '
  
    const newInput = document.createElement('input')
    newInput.type = 'text'
     newInput.name = `input-${document.querySelectorAll('.list-item').length + 1}`
    newInput.placeholder = 'Digite uma tecnologia...'
  



    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remover'
    removeButton.className = 'btn-red'
    removeButton.onclick = () => newLi.remove()
  
  
    newLi.appendChild(newInput)
    newLi.appendChild(removeButton)
    ul.appendChild(newLi)
  }