let container = document.querySelector(".container")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
let p = document.createElement("p")
let divIntentos = document.querySelector("#divIntentos")

let random = Math.floor(Math.random()*100 + 1) 
let intentos = 6
divIntentos.textContent = "Intentos: " +intentos
let partida = true

console.log(random)

input.focus()

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        let numero = parseInt(input.value) 
        if (input.value > 100 || input.value < 1) {
            p.textContent = "Escribe un valor entre 1 y 100"
            container.append(p)
            input.focus()
        }else {
            if (numero === random) {
                p.textContent = "Has acertado! El número era " +random
                container.append(p)
                input.disabled = true
                button.disabled = true
            }else if (numero > random) {
                p.textContent = "Te pasas"
                container.append(p)
                intentos--
                divIntentos.textContent = "Intentos: " +intentos
                comprobarPartida()
                input.focus()
            }else {
                p.textContent = "Muy abajo"
                container.append(p)
                intentos--
                divIntentos.textContent = "Intentos: " +intentos
                comprobarPartida()
                input.focus()
            }
        }
    }
})

button.addEventListener("click", () => {
        let numero = parseInt(input.value) 
        if (input.value > 100 || input.value < 1) {
            p.textContent = "Escribe un valor entre 1 y 100"
            container.append(p)
            input.focus()
        }else {
            if (numero === random) {
                p.textContent = "Has acertado! El número era " +random
                container.append(p)
                input.disabled = true
                button.disabled = true
            }else if (numero > random) {
                p.textContent = "Te pasas"
                container.append(p)
                intentos--
                divIntentos.textContent = "Intentos: " +intentos
                comprobarPartida()
                input.focus()
            }else {
                p.textContent = "Muy abajo"
                container.append(p)
                intentos--
                divIntentos.textContent = "Intentos: " +intentos
                comprobarPartida()
                input.focus()
            }
        }
})

function comprobarPartida() {
    if (intentos == 0) {
        partida = false
    }
    if (partida == false) {
        button.disabled = true
        input.disabled = true
        button.disabled = true
        p.textContent = "Lo sentimos, has perdido. El número era " +random
    }
}