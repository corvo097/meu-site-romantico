const startDate = new Date("2023-11-01T00:00:00");

// 1. Contador de Tempo
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

// 3. Controle da Galeria e Sensores
const gallery = document.getElementById("gallery");
const openBtn = document.getElementById("openGallery");
const closeBtn = document.getElementById("closeGallery");
const mainPhoto = document.getElementById("mainPhoto");

// Função para ativar sensores no iPhone (iOS)
async function requestSensorPermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
            await DeviceOrientationEvent.requestPermission();
        } catch (e) {
            console.error("Permissão de sensor negada");
        }
    }
}

if (openBtn) {
    openBtn.onclick = () => {
        gallery.style.display = "flex";
        requestSensorPermission(); // Pede permissão ao interagir
    };
}

if (mainPhoto) {
    mainPhoto.onclick = () => {
        gallery.style.display = "flex";
        requestSensorPermission();
    };
}

if (closeBtn) closeBtn.onclick = () => gallery.style.display = "none";

// 4. MOVIMENTO DA FOTO (Mouse e Giroscópio)
function applyRotation(x, y) {
    if (!mainPhoto) return;
    // Limita a rotação para 20 graus para não distorcer muito
    const rotX = Math.max(Math.min(y, 20), -20);
    const rotY = Math.max(Math.min(x, 20), -20);
    mainPhoto.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${-rotX}deg)`;
}

// Para PC (Mouse)
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    applyRotation(x, y);
});

// Para Celular (Giroscópio)
window.addEventListener("deviceorientation", (event) => {
    if (event.gamma !== null && event.beta !== null) {
        // Gamma é inclinação lateral, Beta é frente/trás
        applyRotation(event.gamma / 1.5, event.beta / 1.5);
    }
});

// 5. Organização das Fotos da Galeria em Círculo
const carouselImages = document.querySelectorAll(".carousel img");
const totalImages = carouselImages.length;

function positionCarousel() {
    const radius = window.innerWidth < 600 ? 220 : 400; 
    carouselImages.forEach((img, i) => {
        const angle = i * (360 / totalImages);
        img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
}
positionCarousel();
window.addEventListener("resize", positionCarousel);

// 6. Sistema de Animação (Estrelas e Corações)
const sCanvas = document.getElementById("stars");
const hCanvas = document.getElementById("hearts");
const sCtx = sCanvas.getContext("2d");
const hCtx = hCanvas.getContext("2d");

function resizeCanvases() {
    sCanvas.width = hCanvas.width = window.innerWidth;
    sCanvas.height = hCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvases);
resizeCanvases();

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
    sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);
    sCtx.fillStyle = "white";
    stars.forEach(s => {
        sCtx.beginPath();
        sCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        sCtx.fill();
    });

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
    
