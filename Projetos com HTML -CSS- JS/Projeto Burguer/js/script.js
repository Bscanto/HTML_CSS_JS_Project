
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
