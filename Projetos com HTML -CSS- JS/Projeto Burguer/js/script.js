
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
