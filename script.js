// Contador de tempo desde 1º de novembro de 2023
function updateCounter() {
    const startDate = new Date("2023-11-01T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("time-counter").innerText = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos`;
}

setInterval(updateCounter, 1000);

// Frases possessivas que rodam
const phrases = [
    "Você é minha para sempre, e ninguém vai tirar você de mim.",
    "Eu sou seu, e você é minha, para sempre.",
    "Nada nem ninguém vai nos separar, minha.",
    "Você é minha, só minha.",
    "Só você me pertence, e eu sou seu, para todo o sempre."
];

let phraseIndex = 0;
const phraseContainer = document.getElementById("floating-phrase");

function rotatePhrases() {
    phraseContainer.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(rotatePhrases, 5000); // Tempo alterado para 5000 milissegundos (5 segundos)

// Mostrar e esconder a roleta
const mainPhoto = document.getElementById("main-photo");
const carouselContainer = document.getElementById("carousel-container");
const closeCarousel = document.getElementById("close-carousel");

mainPhoto.addEventListener("click", () => {
    carouselContainer.style.display = "flex"; // Mostrar a roleta
});

closeCarousel.addEventListener("click", () => {
    carouselContainer.style.display = "none"; // Fechar a roleta
});

// Animação do coração
document.getElementById("heart-animation").style.display = "block";
setTimeout(() => {
    document.getElementById("heart-animation").style.display = "none";
}, 2000);
