let container = document.querySelector(".container")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
let newP = document.createElement("p")

let random = Math.floor(Math.random()*100 + 1)

let intentos = 6
let partida = true


console.log(random)


input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        let numero = parseInt(input.value)
        if (numero > random) {
            newP.remove()
            newP.textContent = "Te pasas"
            container.append(newP)
            console.log("Te pasas")
        }else if (numero < random) {
            newP.remove()
            newP.textContent = "Por debajo"
            container.append(newP)
            console.log("Por debajo")
        } else {
            newP.remove()
            newP.textContent = "Enhorabuena! El número era " +random
            container.append(newP)
            console.log("Enhorabuena! El número era " +random)
        }  
    }
})



button.addEventListener("click", () => {
    let numero = parseInt(input.value)
    if (numero > random) {
        newP.remove()
        newP.textContent = "Te pasas"
        container.append(newP)
        console.log("Te pasas")
    }else if (numero < random) {
        newP.remove()
        newP.textContent = "Por debajo"
        container.append(newP)
        console.log("Por debajo")
    } else {
        newP.remove()
        newP.textContent = "Enhorabuena! El número era " +random
        container.append(newP)
        console.log("Enhorabuena! El número era " +random)
    }
})