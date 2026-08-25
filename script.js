// Seleciona os elementos do menu
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

// Adiciona evento de clique para abrir/fechar o menu em telas pequenas
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
