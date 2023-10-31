const ANCHO_TABLERO = 11
const ALTO_TABLERO = 11
const NUM_MINAS = 9
const ANCHO_CELDA = 30
const TABLERO = document.querySelector("#tablero")

generarTablero(ANCHO_TABLERO, ALTO_TABLERO)

function generarTablero(ancho, alto) {
    TABLERO.style.width = ANCHO_CELDA * ancho +"px"
    for (let i = 0; i < ancho * alto; i++) {                        //ancho x alto
        let newCelda = document.createElement("div")
        newCelda.classList.add("celda")
        newCelda.dataset.fila = Math.floor(i / ancho)
        newCelda.dataset.col = i % ancho
        TABLERO.append(newCelda)
    }
}