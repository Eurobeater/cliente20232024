let form = document.querySelector("form")
form.action = "server/todoOK.html"

let inputGame = document.querySelector("#game")
let errorGame = document.querySelector("#divGame > .invalid-feedback")
errorGame.classList.remove("invalid-feedback")
errorGame.classList.add("valid-feedback")

let inputYear = document.querySelector("#year")
let errorYear = document.querySelector("#divYear > .invalid-feedback")
errorYear.classList.remove("invalid-feedback")
errorYear.classList.add("valid-feedback")

let selectPlatform = document.querySelector("#platform")
let errorPlatform = document.querySelector("#divPlatform > .invalid-feedback")
errorPlatform.classList.remove("invalid-feedback")
errorPlatform.classList.add("valid-feedback")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let todoOK = true
   
    if (!comprobarVideojuego()) {                              
        todoOK = false
    }

    if (!comprobarAnyo()) {                                 
        todoOK = false
    }

    if (!comprobarPlataforma()) {                                 
        todoOK = false
    }

    if(todoOK == true) {
        e.target.submit()
    }
})

function comprobarVideojuego() {
    let RegExp = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚÇç-]{1,}$/

    if(RegExp.test(inputGame.value.trim())) {
        errorGame.classList.remove("valid-feedback")
        errorGame.classList.remove("invalid-feedback")
        errorGame.classList.add("valid-feedback")
        return true
    }else {
        errorGame.classList.remove("valid-feedback")
        errorGame.classList.remove("invalid-feedback")
        errorGame.classList.add("invalid-feedback")
        return false
    }
}

function comprobarAnyo() {
    let RegExp = /^\d{4,4}$/

    if(RegExp.test(inputYear.value.trim()) && inputYear.value.trim() >= 1950 && inputYear.value.trim() <= 2023) {
        errorYear.classList.remove("valid-feedback")
        errorYear.classList.remove("invalid-feedback")
        errorYear.classList.add("valid-feedback")
        return true
    }else {
        errorYear.classList.remove("valid-feedback")
        errorYear.classList.remove("invalid-feedback")
        errorYear.classList.add("invalid-feedback")
        return false
    }
}

function comprobarPlataforma() {
    if (selectPlatform.value != "Elige plataforma") {
        errorPlatform.classList.remove("valid-feedback")
        errorPlatform.classList.remove("invalid-feedback")
        errorPlatform.classList.add("valid-feedback")
        return true
    }else {
        errorPlatform.classList.remove("valid-feedback")
        errorPlatform.classList.remove("invalid-feedback")
        errorPlatform.classList.add("invalid-feedback")
        return false
    }
}