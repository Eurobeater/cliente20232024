let form = document.querySelector("form")
let inputConductor = document.querySelector("#conductor")
let conductorError = document.querySelector("#conductorError")
let inputDni = document.querySelector("#dni")
let inputEdad = document.querySelector("#edad")

form.addEventListener("submit", (e) => {
    //impedir que se envíe el formulario siempre
    e.preventDefault()

    let todoOK = true
    //comprobaciones de los campos del formulario
    if (!comprobarNombre()) {                              //si la funcion retorna false, todoOk se vuelve false
        todoOK = false
    }

    if (!comprobarDni()) {                                 //si la funcion retorna false, todoOk se vuelve false
        todoOK = false
    }


    if(todoOK == true) {
        e.target.submit()
    }

        //si algo falla advertir al usuario y abortar

    //si todas las comprobaciones han ido bien...

    

})

function comprobarNombre () {
    let RegExp = /^\[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚÇç]{2,}$/

    if(inputConductor.value.trim().length >= 2 && RegExp.test(inputConductor.value.trim())) {
        //vaciar conductorError
        conductorError.textContent = ""
        return true
    }else {
        //mostrar error en conductorError
        conductorError.textContent = "El nombre no es válido"
        return false
    }
}

function comprobarDni () {
    let RegExp = /^[A-E]\d{4}$/

    if("") {
        //vaciar dniError
        return true
    }else {
        
        return false
    }
}