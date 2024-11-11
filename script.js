// Lista de frases possessivas
const frases = [
  "Você é minha.",
  "Minha para sempre.",
  "Eu te pertenço.",
  "Ninguém mais vai te amar como eu.",
  "Você é tudo para mim.",
  "Eu sou seu dono.",
  "Só você e eu, para sempre."
];

// Seleciona o elemento da frase
const fraseElement = document.getElementById('frase');

// Função para trocar as frases
let index = 0;
setInterval(() => {
  fraseElement.textContent = frases[index];
  index = (index + 1) % frases.length; // Ciclo das frases
}, 5000); // Troca a cada 5 segundos

