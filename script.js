const startDate = new Date("2023-11-01T00:00:00");

// 1. Contador de Tempo corrigido
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counterElement = document.getElementById("time-counter");
    if (counterElement) {
        counterElement.innerText = `${days} dias, ${hours}h ${minutes}m ${seconds}s juntos`;
    }
}
setInterval(updateCounter, 1000);
updateCounter();

// 2. Rotação de Frases
const phrases = [
    "Você é meu lugar favorito.",
    "Nosso amor é infinito.",
    "Meu mundo começa em você.",
    "Para sempre nós.",
    "Meu coração sempre será seu."
];

let phraseIndex = 0;
const phraseContainer = document.getElementById("floating-phrase");

function rotatePhrase() {
    if (!phraseContainer) return;
    phraseContainer.style.opacity = 0;
    setTimeout(() => {
        phraseContainer.innerText = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;
        phraseContainer.style.opacity = 1;
    }, 400);
}
setInterval(rotatePhrase, 5000);
rotatePhrase();

// 3. Controle da Galeria (Abrir e Fechar)
const gallery = document.getElementById("gallery");
const openBtn = document.getElementById("openGallery"); // Botão novo do HTML
const closeBtn = document.getElementById("closeGallery");
const mainPhoto = document.getElementById("mainPhoto");

// Abre pelo botão ou clicando na foto principal
if (openBtn) openBtn.onclick = () => gallery.style.display = "flex";
if (mainPhoto) mainPhoto.onclick = () => gallery.style.display = "flex";
if (closeBtn) closeBtn.onclick = () => gallery.style.display = "none";

// 4. Efeito 3D na foto principal (Suave)
document.addEventListener("mousemove", (e) => {
    if (!mainPhoto) return;
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    mainPhoto.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
});

// 5. Organização das Fotos da Galeria em Círculo
const carouselImages = document.querySelectorAll(".carousel img");
const totalImages = carouselImages.length;
const radius = window.innerWidth < 600 ? 250 : 400; // Ajusta o raio do círculo para celular

carouselImages.forEach((img, i) => {
    const angle = i * (360 / totalImages);
    img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
});

// 6. Sistema de Estrelas e Corações (Otimizado para Resize)
function setupCanvas(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return { canvas, ctx };
}

const { canvas: sCanvas, ctx: sCtx } = setupCanvas("stars");
const { canvas: hCanvas, ctx: hCtx } = setupCanvas("hearts");

let stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * sCanvas.width,
    y: Math.random() * sCanvas.height,
    size: Math.random() * 2
}));

let hearts = Array.from({ length: 30 }, () => ({
    x: Math.random() * hCanvas.width,
    y: Math.random() * hCanvas.height,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 1 + 0.5
}));

function animate() {
    // Estrelas
    sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);
    sCtx.fillStyle = "white";
    stars.forEach(s => {
        sCtx.beginPath();
        sCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        sCtx.fill();
    });

    // Corações
    hCtx.clearRect(0, 0, hCanvas.width, hCanvas.height);
    hCtx.fillStyle = "#ff4da6";
    hearts.forEach(h => {
        hCtx.beginPath();
        hCtx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
        hCtx.fill();
        h.y -= h.speed;
        if (h.y < 0) {
            h.y = hCanvas.height;
            h.x = Math.random() * hCanvas.width;
        }
    });

    requestAnimationFrame(animate);
}
animate();

// Ajustar canvas se a tela mudar de tamanho
window.onresize = () => {
    sCanvas.width = hCanvas.width = window.innerWidth;
    sCanvas.height = hCanvas.height = window.innerHeight;
};
  
