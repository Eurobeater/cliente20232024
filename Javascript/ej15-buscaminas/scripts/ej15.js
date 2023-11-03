const ANCHO_TABLERO = 11
const ALTO_TABLERO = 11
const NUM_MINAS = 9
const ANCHO_CELDA = 30
const TABLERO = document.querySelector("#tablero")
const labelFila = document.querySelector("#fila")
const labelCol = document.querySelector("#columna")

generarTablero(ANCHO_TABLERO, ALTO_TABLERO)
colocarMinas(ANCHO_TABLERO, ALTO_TABLERO, NUM_MINAS)

TABLERO.addEventListener("mousemove", function(e){
    if (e.target.classList.contains("celda")) {                 //si a donde apunta el evento tiene la clase celda... (acceder a una celda específica)
        labelFila.textContent = e.target.dataset.fila
        labelCol.textContent = e.target.dataset.col
    }
})

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

function colocarMinas(ancho, alto, numMinas) {
    let minasPorColocar = numMinas
    const TODAS_LAS_CELDAS = TABLERO.querySelectorAll("div.celda")
    while (minasPorColocar) {                                           //si todavia hay minas por colocar...
        let posicion = Math.floor(Math.random()* (ancho * alto))
        if ("") {

        }
    }
}