let allButtons = document.querySelectorAll(".btn.btn-dark")
let inputDecimal = document.querySelector("#decimal")

console.log(allButtons)
console.log(allButtons[0].id)

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", (e) => {
        //console.log("Boton " +allButtons[i].id)
        if (allButtons[i].textContent == "0") {
            allButtons[i].textContent = "1"
        }else {
            allButtons[i].textContent = "0"
        }
        pasarDecimal(e)
    })
}

function pasarDecimal(e) {
    //console.log(e.target)
    //let botonPasarDecimal = Math.pow(parseInt(e.target.textContent), 2) 
    //console.log(botonPasarDecimal)
    let valorBoton = parseInt(e.target.textContent) 
    let idBoton = e.target.id
    console.log("idBoton: " +idBoton)
    for (let i = 7; i >= 0; i--) {                                   //for decrementado
        //console.log("for pasarDecimal")
        if (idBoton == "b" +i) {
            console.log("i:" +i)
            console.log("valorBoton: " +valorBoton)
            console.log(typeof("tipo valorBoton :" +valorBoton))
            
            //console.log("if Bucle " +e.target.id)
            let calcularPotencia = Math.pow(valorBoton, i)
            console.log("El pow es: " +calcularPotencia)
        }



        //let pow = parseInt(Math.pow(allButtons[i].textContent, i)) 
        //console.log("pow:" +pow)
    }
    
}
