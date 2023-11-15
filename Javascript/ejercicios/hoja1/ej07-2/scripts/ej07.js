let allButtons = document.querySelectorAll(".btn.btn-dark")
let inputDecimal = document.querySelector("#decimal")
let bitsOn = []                                              //declarar el array aqui, de lo contrario, se machaca
let bitsOff = []

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", (e) => {
        if (allButtons[i].textContent == "0") {
            allButtons[i].dataset.activado = true
            allButtons[i].textContent = "1"
        }else {
            allButtons[i].textContent = "0"
            allButtons[i].dataset.activado = false
        }
        pasarDecimal(e)
    })
}

function pasarDecimal(e) {
    let valorBoton = e.target.textContent
    console.log(botonTarget)
    let idBoton = e.target.id
    let sumaBits = 0                         //no olvidarse de poner las sumas de los arrays como valor 0 y dentro de la funcion donde esta funcionando para reiniciar el valor cada vez que la función se llama. De lo contrario, los valores se acumulan y la suma no será correcta (Sorry, Juanpe)
    let restaBits = 0

    for (let i = 0; i <= allButtons.length; i++) {
        if (valorBoton == "1" && idBoton == "b"+i) {
                console.log("Indice: " +i)
                console.log("   Id: " +idBoton)
                let buttonPow = Math.pow(2, i)
                bitsOn.splice(i, 1, buttonPow)
                console.log("Pow: " +buttonPow)
                sumarBits(sumaBits)                                           //función aparte, como alternativa
        }if (valorBoton == "0" && idBoton == "b"+i) {
            console.log("Indice: " +i)
            console.log("   Id: " +idBoton)
            bitsOn.splice(i, 1)
            let buttonPow = Math.pow(2, i)
            bitsOff.splice(i, 1, buttonPow)
            console.log(bitsOn)
            sumarBits(sumaBits)

        }
    }
    /*
    for (let j = 0; j < bitsOn.length; j++) {
        sumaBits += bitsOn[j]
    }
    console.log(bitsOn)
    console.log(sumaBits)
    inputDecimal.value = sumaBits
    */
}


function sumarBits(sumaBits) {
    //sumaBits = 0                                      //(EN EL CASO DE DECLARAR EN LA FUNCIÓN APARTE) no olvidarse de poner las sumas de los arrays como valor 0 y dentro de la funcion donde esta funcionando para reiniciar el valor cada vez que la función se llama. De lo contrario, los valores se acumulan y la suma no será correcta (Sorry, Juanpe)
    for (let i = 0; i < bitsOn.length; i++) {
        sumaBits += bitsOn[i]
    }
    inputDecimal.value = sumaBits
    console.log(bitsOn)
    console.log("sumaBits = " +sumaBits)
}