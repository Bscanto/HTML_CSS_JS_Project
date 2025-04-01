//SELECIONA O TAG (H1, H2, p, section)
const select = document.getElementsByTagName('h1')
console.log(select)


//SELECIONA pelo id
const selectID = document.getElementById('teste')
console.log(selectID)


//SELECIONA pela class
const selectClass = document.getElementsByClassName('botao')
console.log(selectClass)


//SELECIONA com query selector
const selectQuery = document.querySelector('h1')
console.log(selectQuery)
const selectQueryId = document.querySelector('#teste')
console.log(selectQueryId)
const selectQueryClass = document.querySelector('.botao')
console.log(selectQueryClass)

//Selecionar varios items
const querySelector = document.querySelector('li')
console.log(querySelector)// seleciona o primeiro li

// O querySelectorAll irá trazer sempre um array
const queryAll = document.querySelectorAll('li')
console.log(queryAll)//seleciona todos os LI

// trazer determinada lista
const lista = document.querySelectorAll('#teste ul li')
console.log(lista)