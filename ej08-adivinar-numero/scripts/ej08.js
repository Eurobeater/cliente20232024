const ENTRADA = document.querySelector("#inputIntentos")
const SALIDA = document.querySelector("#textareaSalida")
let random;
let partidaEnMarcha
let numIntentos = 6

ENTRADA.focus()

function comprobarNumero() {
    // Solo debe hacer algo si hay partida en marcha
    if (!partidaEnMarcha) return

    //comprobar si lo introducido por el usuario es un valor adecuado
    let intento = ENTRADA.value.trim()

    if (!intento || isNaN(intento)) {
        ENTRADA.value = ""
        ENTRADA.focus()
        return
    }

    // Si hay partida en marcha, comparar el nº con el secreto
    if (intento == random) {
        SALIDA.value += "¡ACIERTAS! El secreto era " +random
        partidaEnMarcha = false
    } else if (intento > random) {
        SALIDA.value += "Con el nº " +intento+ " te has pasado. \n"
        ENTRADA.value = ""
        ENTRADA.focus()
    } else {
        SALIDA.value += "Con el nº " +intento+ " te has quedado corto/a. \n"
        ENTRADA.value
        ENTRADA.focus()
    }
    --numIntentos
    console.log(numIntentos)

    if (numIntentos == 0) {
        SALIDA.value += "Se han agotado los intentos y no has acertado. El secreto era " +random
        partidaEnMarcha = false
        ENTRADA.disabled = true
    }
}

function empezarPartida() {
    partidaEnMarcha = true
    // Habilitar el input
    ENTRADA.disabled = false

    // Vaciar el textarea
    SALIDA.value = ""

    // Generar un numero entero aleatorio entre 1 y 100
    random = Math.floor(Math.random() * 100) + 1
    ENTRADA.focus()
    console.log("Random: " + random);
}