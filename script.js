// Adiciona interatividade aos botões "Leia mais"
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Redirecionando para o artigo completo...");
    });
  });
});
