let container = document.querySelector(".container")
let newP = document.createElement("p")

let numeros = []
let random

for (let i = 1; i <= 10; i++) {
    random = parseInt(Math.random()*10)
    numeros.push(random)
    numeros.sort()                    //ordenar de menor a mayor
    //numeros.reverse()               //ordenar de mayor a menor (se necesita haber usado el metodo sort() antes)
}

if (numeros.length == 10) {
    newP.textContent = "Números: " +numeros
    container.append(newP)
}

console.log("numeros")
console.log(numeros)