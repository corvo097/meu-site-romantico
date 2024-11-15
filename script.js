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

// Função para deslizar a roleta de fotos
let currentIndex = 0;
const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Adicionar detecção de toque para deslizar as imagens
let startX;

carouselImages.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carouselImages.addEventListener("touchmove", (e) => {
    if (startX - e.touches[0].clientX > 50) {
        nextImage();
    } else if (e.touches[0].clientX - startX > 50) {
        prevImage();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    updateCounter();
    setInterval(rotatePhrases, 5000);
});
