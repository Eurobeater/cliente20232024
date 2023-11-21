let container = document.querySelector(".container")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
let newP = document.createElement("p")

let añoActual = 2023

button.addEventListener("click", () => {
    newP.remove()
    let fecha = parseInt(input.value)
    let edad = añoActual - fecha
    newP.textContent = "Tu edad es: " +edad
    container.append(newP)
})
