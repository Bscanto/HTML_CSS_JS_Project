function addInput() {
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'Novo input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
   newInput.name = `input-${document.querySelectorAll('.list-item').length + 1}`
  newInput.placeholder = 'Digite algo...'

  const removeButton = document.createElement('button')
  removeButton.innerText = 'Remover'
  removeButton.onclick = () => newLi.remove()


  newLi.appendChild(newInput)
  
  newLi.appendChild(removeButton)
  ul.appendChild(newLi)
}

