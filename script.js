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

// Frases rotativas
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

setInterval(rotatePhrases, 5000); // Troca a cada 5 segundos

// Mostrar e esconder a roleta
const mainPhoto = document.querySelector(".photo-container img");
const carouselContainer = document.getElementById("carousel-container");
const closeCarousel = document.getElementById("close-carousel");

mainPhoto.addEventListener("click", () => {
    carouselContainer.style.display = "flex"; // Mostra a roleta
});

closeCarousel.addEventListener("click", () => {
    carouselContainer.style.display = "none"; // Esconde a roleta
});

// Função de rotação da roleta com o toque
let touchStartX = 0;
const carouselImages = document.getElementById("carousel-images");

carouselImages.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

carouselImages.addEventListener("touchmove", (e) => {
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    carouselImages.style.transition = "transform 0.3s ease"; // Suavizar a rotação
    carouselImages.style.transform = `translateX(${deltaX}px)`;
});

carouselImages.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? "left" : "right";
        // Você pode adicionar a lógica de rotação com base na direção do deslizar
    }
    carouselImages.style.transition = "transform 0.3s ease";
    carouselImages.style.transform = `translateX(0px)`;
});
