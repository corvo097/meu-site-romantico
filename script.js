const phrases = [
    "Você é minha para sempre",
    "Eu sou seu para sempre",
    "Minha vida, minha alma",
    "Te amo mais que tudo",
    "Nada vai nos separar"
];

let phraseIndex = 0;
const phraseElement = document.getElementById('phrase');
setInterval(() => {
    phraseElement.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}, 5000); // Troca a frase a cada 5 segundos

// Contador de tempo
const startDate = new Date('2023-11-11T00:00:00'); // Ajuste a data conforme necessário
const timeCounterElement = document.getElementById('timeCounter');

function updateTime() {
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timeCounterElement.textContent = `Tempo juntos: ${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTime, 1000); // Atualiza o tempo a cada segundo
updateTime(); // Atualiza imediatamente ao carregar
