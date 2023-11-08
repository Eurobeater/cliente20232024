let allButtons = document.querySelectorAll(".btn.btn-dark")
let inputDecimal = document.querySelector("#decimal")

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

    
    for (let i = 7; i >= 0; i--) {                                   //for decrementado
        //console.log("for pasarDecimal")
        if (e.target.id == "b"+i) {
            //console.log("if Bucle " +e.target.id)
            let botonPasarDecimal = Math.pow(parseInt(e.target.textContent), i) 
            console.log("El pow es: " +botonPasarDecimal)
        }



        //let pow = parseInt(Math.pow(allButtons[i].textContent, i)) 
        //console.log("pow:" +pow)
    }
    
}