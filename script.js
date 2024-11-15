/* Definindo estilo básico */
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: black;
    color: pink;
    text-align: center;
    overflow: hidden;
    position: relative;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 5vw;
    color: #ff69b4;
    text-shadow: 0 0 8px #ff69b4;
    margin-top: 20px;
}

h2 {
    font-size: 3vw;
    color: pink;
    margin-bottom: 20px;
}

.photo-container img {
    width: 80%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 15px 5px rgba(255, 105, 180, 0.8);
    margin: 20px 0;
    cursor: pointer;
}

/* Estilo da roleta de imagens */
.photo-carousel {
    display: none;
    width: 80%;
    max-width: 900px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-images {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel-image {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    margin: 0 5px;
    box-shadow: 0 0 15px 5px rgba(255, 105, 180, 0.8);
}

.carousel-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.carousel-button {
    background: rgba(255, 105, 180, 0.8);
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    color: white;
    font-weight: bold;
}

/* Animação do coração */
.heart-animation {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.heart {
    width: 100px;
    height: 100px;
    background-color: pink;
    clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%);
    animation: heartAnimation 2s ease-in-out forwards;
}

@keyframes heartAnimation {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(3);
    }
}

/* Responsividade */
@media (max-width: 768px) {
    .carousel-image {
        max-width: 250px;
    }
}
