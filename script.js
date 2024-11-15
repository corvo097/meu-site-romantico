k// Contador de tempo desde 1º de novembro de 2023
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

// Mostrar e esconder roleta de fotos
const mainPhotoContainer = document.getElementById("main-photo-container");
const photoCarousel = document.getElementById("photo-carousel");

mainPhotoContainer.addEventListener("click", () => {
    photoCarousel.style.display = "block";  // Mostrar a roleta de imagens
});

// Navegação na roleta
let currentIndex = 0;
const carouselImages = document.getElementById("carousel-images");
const totalImages = document.querySelectorAll(".carousel-image").length;

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    carouselImages.style.transform = `translateX(-${currentIndex * 310}px)`;
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    carouselImages.style.transform = `translateX(-${currentIndex * 310}px)`;
});

