let container = document.querySelector(".container")
let info = document.querySelector("#info")
let newDiv1 = document.createElement("div")
let newDiv2 = document.createElement("div")
let newDiv3 = document.createElement("div")

let random = Math.floor(Math.random()*100+1)

info.textContent = "El número random es: " +random

parImpar()
tablaMultiplicar()
areaCirculo()

function parImpar() {
        if (random %2 == 0) {
            newDiv1.textContent = random+ " es par"
            container.append(newDiv1)
        }else {
            newDiv1.textContent = random+ " es impar"
            container.append(newDiv1)
        }
}

function tablaMultiplicar() {
    newDiv2.innerHTML = "<br> Tabla de multiplicar del " +random+ ": <br><br>" 
        for (let i = 1; i <= 10; i++) {
            newDiv2.innerHTML += random+ " x " +i+ " = " +random * i + "<br>"
            container.append(newDiv2)
        }
}

function areaCirculo() {
    const PI = 3.14
    let r = Math.pow(random, 2)
    formula =  PI * r

    newDiv3.textContent = "El área del círculo cuyo radio es " +random+ " es: " +formula+ " metros cuadrados"
    container.append(newDiv3)
}