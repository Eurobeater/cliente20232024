//1. El botón EMPEZAR debe inicializar una cuenta atrás de 10 segundos. Al llegara 0, se detiene
//2. Cada segundo que avanza, la cuenta atrás, la bola cambia de sitio al azar
//3. Que la bola sea clicable para sumar puntos SOLO con la partida en marcha

const tablero = document.querySelector("#tablero")
const btnEmpezar = document.querySelector("#btnEmpezar")
const ANCHURA_TABLERO = 800
const ALTURA_TABLERO = 500

const DIAMETRO_BOLA = 30
const addBallBtn = document.querySelector("#addBallBtn")
const add10BallsBtn = document.querySelector("#add10BallsBtn")
const bolas = []


let tiempo = 10
btnEmpezar.addEventListener("click", empezarPartida)        //no usar el parentesis para no llamar a la funcion directamente



btnEmpezar.addEventListener("click", () => {
    if (tiempo > 0) {
        tiempo--;
        console.log("Tiempo:" +tiempo)
    }
    
    if (tiempo === 0) {
        clearInterval(intervalId); // Detener el intervalo cuando el tiempo llega a 0
    }
});




setInterval(empezarPartida, 1000)












