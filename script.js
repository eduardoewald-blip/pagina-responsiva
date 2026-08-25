// Seleciona os elementos do menu
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

// Adiciona evento de clique para abrir/fechar o menu em telas pequenas
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
// Estrutura de dados das perguntas (você pode trocar as imagens e perguntas)
const questions = [
  {
    question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&auto=format&fit=crop",
    options: ["Terra", "Marte", "Júpiter", "Vênus"],
    answer: 1 // Índice da resposta correta (Marte)
  },
  {
    question: "Qual destas estruturas fica na França?",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop",
    options: ["Estátua da Liberdade", "Torre de Pisa", "Torre Eiffel", "Big Ben"],
    answer: 2 // Índice da resposta correta (Torre Eiffel)
  },
  {
    question: "Qual o maior mamífero do mundo?",
    image: "https://images.unsplash.com/photo-1568430460464-523671852856?w=600&auto=format&fit=crop",
    options: ["Elefante Africano", "Baleia-Azul", "Tubarão-Baleia", "Girafa"],
    answer: 1 // Índice da resposta correta (Baleia-Azul)
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Elementos HTML
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const optionsContainer = document.getElementById("options-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");

// Carrega a pergunta atual na tela
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionText.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  questionImage.src = currentQuestion.image;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(index, button));
    optionsContainer.appendChild(button);
  });
}

// Verifica se a resposta está correta
function checkAnswer(selectedIndex, selectedButton) {
  const currentQuestion = questions[currentQuestionIndex];
  const allButtons = optionsContainer.querySelectorAll(".option-btn");

  // Desativa todos os botões após o clique
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQuestion.answer) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
    // Destaca a resposta correta
    allButtons[currentQuestion.answer].classList.add("correct");
  }

  // Passa para a próxima pergunta após 1.5 segundos
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

// Exibe a tela final com o resultado
function showResults() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreText.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Reinicia o quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
}

// Inicializa o quiz ao carregar a página
loadQuestion();
