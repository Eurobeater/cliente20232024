let container = document.querySelector(".container")
let newP = document.createElement("p")

let numeros = []

for (let i = 1; i <= 10; i++) {
    numeros.push(i)
}

if (numeros.length == 10) {
    newP.textContent = "Números: " +numeros
    container.append(newP)
}

console.log(numeros)