// Exemplo de contagem regressiva (pode ser modificada)
function startCountdown() {
  var countdownElement = document.getElementById("contador");
  var countdownDate = new Date("Nov 30, 2024 00:00:00").getTime();
  
  var interval = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "EXPIRED";
    }
  }, 1000);
}

startCountdown();
