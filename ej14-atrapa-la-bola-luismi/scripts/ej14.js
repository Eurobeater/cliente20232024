//0. Darle dimensiones al tablero y la bola
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px"
bola.style.height = DIAMETRO_BOLA + "px"

let records = [
    {name: "Andrew", points: "10"},
    {name: "Pamela", points: "8"},
    {name: "Elisabeth", points: "6"},
    {name: "George", points: "4"},
    {name: "Caroline", points: "2"},
]
imprimirRecords()

const tiempo = document.querySelector("#tiempo")
const puntos = document.querySelector("#puntos")
const btnEmpezar = document.querySelector("#btnEmpezar")

let cuentaAtras     //interval para el marcador de tiempo
let agitador        //interval para mover la bola
let partidaEnMarcha = false

//1. El botón EMPEZAR debe inicializar una cuenta atrás de 10 segundos
btnEmpezar.addEventListener("click", function() {
    //Acciones que ocurren cuando empieza una partida:
    //a) Inicializar una cuenta atrás de 10 segundos
    tiempo.textContent = 10
    puntos.textContent = 0
    clearInterval(cuentaAtras)                  //por si habia una partida en marcha. detener intervalo actual y empmezar uno nuevo idéntico
    cuentaAtras = setInterval(decrementarSegundos, 1000)  
    clearInterval(agitador)
    agitador = setInterval(moverBola, 1000)  
    moverBola()                         //para que la bola no comience siempre en la esquina superior izquierda
    partidaEnMarcha = true              //para comenzar la partida
})

//2. Cada segundo que avanza la cuenta atrás, la bola cambia de sitio al azar
//Al llegar a 0, se detiene (pista: clearInterval())
function decrementarSegundos() {
    tiempo.textContent--
    if (tiempo.textContent == "0") {
        clearInterval(cuentaAtras)
        partidaEnMarcha = false
        clearInterval(agitador)
    }
}

//3. Que la bola sea clicable para sumar puntos SOLO con la partida en marcha 
bola.addEventListener("click", function() {
    if (partidaEnMarcha) {          //si la partida está en marcha, se incrementan los puntos al pinchar en la bola
        puntos.textContent++
        //recolocamos la bola y reiniciamos el agitador (interval que mueve la bola)
        moverBola()
        clearInterval(agitador)
        agitador = setInterval(moverBola, 1000)
    }
})

function moverBola() {
    bola.style.top = Math.random()* (ALTURA_TABLERO - DIAMETRO_BOLA)+ "px"
    bola.style.left = Math.random()* (ANCHURA_TABLERO - DIAMETRO_BOLA)+ "px"
}

function imprimirRecords() {
    const cuerpo = document.querySelector("#records>tbody")
    records.forEach( (r, i) => {
        let nuevaFila = cuerpo.insertRow()
        let celda1 = nuevaFila.insertRowCell()
        let celda2 = nuevaFila.insertRowCell()
        let celda3 = nuevaFila.insertRowCell()
        celda1.textContent = i + 1
        celda2.textContent = r.name
        celda3.textContent = r.points
    })
}
