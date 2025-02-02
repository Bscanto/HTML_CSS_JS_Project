
// MENU SUSPENSO
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-menu a");  
const header = document.querySelector("header"); 

// Alterna o estado do menu (abre/fecha)
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Fechar o menu ao clicar em qualquer item do menu
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Fechar o menu se o usuário clicar fora do menu
document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});







// ANIMAÇÂO HERO
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(heroSection);
});


//H1
document.addEventListener("DOMContentLoaded", function () {
  const text = "O Hamburguer mais delicioso. 😋";
  const target = document.getElementById("hero-title");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Ajuste o tempo para velocidade (100ms é suave)
    }
  }

  typeWriter();
});







//Active do icone do menu cardapio
 // Remove a classe active de todos os itens
 document.querySelectorAll('.nav-tabs li').forEach(li => li.classList.remove('active'));
 
document.querySelectorAll('.nav-tabs a').forEach(item => {
  item.addEventListener('click', function () {
    // Remove a classe active de todos os itens
    document.querySelectorAll('.nav-tabs li').forEach(li => li.classList.remove('active'));
    
    // Adiciona a classe active ao item clicado
    item.parentElement.classList.add('active');
  });
});





//ABAS DO MENU 
// Seleciona os elementos das abas e os conteúdos
const tabs = document.querySelectorAll('.nav-tabs li a');
const tabContents = document.querySelectorAll('.products-grid');

// Adiciona evento de clique em cada aba
tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    event.preventDefault();

    // Remove a classe "active" de todas as abas e conteúdos
    tabs.forEach(tab => tab.parentElement.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Adiciona a classe "active" na aba e no conteúdo correspondente
    tab.parentElement.classList.add('active');
    const targetId = tab.getAttribute('href').replace('#', '');
    document.getElementById(targetId).classList.add('active');
  });
});







 // Função para abrir a modal
 function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

// Função para fechar a modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

// Função para fechar a modal se clicar fora dela
window.onclick = function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    closeModal(event.target.id);
  }
}




let cart = [];  // Array para armazenar os itens do carrinho
const cartTotalElement = document.getElementById("cart-total");  // Elemento para mostrar o total
const cartContainer = document.getElementById("cart");  // Container do carrinho
const checkoutButton = document.getElementById("checkout-button");  // Botão de finalizar compra

// Função para adicionar item ao carrinho
function addToCart(item) {
  cart.push(item);  // Adiciona o item ao carrinho
  updateCart();  // Atualiza a exibição do carrinho

  if (cart.length === 1) {
    cartContainer.style.display = 'block';  // Exibe o carrinho quando o primeiro item for adicionado
  }
}

// Função para atualizar a exibição do carrinho
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = '';  // Limpa os itens exibidos

  let total = 0;  // Variável para calcular o total do carrinho

  // Para cada item no carrinho, exiba as informações
  cart.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    itemElement.innerHTML = `
      <p>${item.name} - R$${item.price}</p>
      <button onclick="removeFromCart('${item.name}')">Remover</button>
    `;

    cartItemsElement.appendChild(itemElement);
    total += item.price;  // Soma o preço do item ao total
  });

  cartTotalElement.textContent = total.toFixed(2);  // Atualiza o total do carrinho
}

// Função para remover item do carrinho
function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);  // Remove o item pelo nome
  updateCart();  // Atualiza a exibição do carrinho

  if (cart.length === 0) {
    cartContainer.style.display = 'none';  // Esconde o carrinho se não houver itens
  }
}

// Função para finalizar a compra e zerar o carrinho
checkoutButton.addEventListener("click", function() {
  if (cart.length > 0) {
    alert("Obrigado pelo seu pedido! Seu carrinho foi finalizado.");  // Exibe mensagem de sucesso
    cart = [];  // Limpa o carrinho
    updateCart();  // Atualiza a exibição do carrinho
    cartContainer.style.display = 'none';  // Esconde o carrinho
  } else {
    alert("Seu carrinho está vazio.");
  }
});
