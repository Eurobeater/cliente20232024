let container = document.querySelector(".container")
let newP = document.createElement("p")
let newPCopia = document.createElement("p")

let numeros = []
let numerosCopia = []
let random

for (let i = 1; i <= 10; i++) {
    random = parseInt(Math.random()*10)
    numeros.push(random)
    numerosCopia = numeros.slice(0)
}

if (numeros.length == 10) {
    newP.textContent = "Números: " +numeros
    container.append(newP)
    newPCopia.textContent = "Números copia: " +numerosCopia
    container.append(newPCopia)
}

console.log("numeros")
console.log(numeros)

console.log("numerosCopia")
console.log(numerosCopia)