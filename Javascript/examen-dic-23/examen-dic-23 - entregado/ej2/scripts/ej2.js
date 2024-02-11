const premioPuntos = [ 25, 18, 15, 12, 10, 8, 6, 4, 2, 1]

let urlBase = "https://my-json-server.typicode.com/luismiguel-fernandez/examen/"
let consultas = ["pilotos", "constructores"]

let clasiPilotos = document.querySelector("#clasiPilotos")
let clasiConstructores = document.querySelector("#clasiConstructores")
let tbodyClasiConstructores = document.querySelector("#clasiConstructores > tbody")
let tbodyClasiPilotos = document.querySelector("#clasiPilotos > tbody")


imprimirPilotos()
imprimirConstructores()

let allTbodyChildrenPilotos = tbodyClasiPilotos.children

function imprimirPilotos() {
    fetch(urlBase + consultas[0])
        .then( resp => resp.json() )
        .then( json => {
            json.forEach((resultado, index) => {
                let newTr = document.createElement("tr")
                let newTdId = document.createElement("td")
                let newTdNombre = document.createElement("td")
                let newTdConstructor = document.createElement("td")
                let newTdPuntos = document.createElement("td")
                let newTdAcciones = document.createElement("td")
                let newButtonUp = document.createElement("button")
                let newButtonDown = document.createElement("button")

                newTdId.textContent = resultado.id
                newTdNombre.textContent = resultado.nombre
                newTdConstructor.textContent = resultado.constructor
                newTdPuntos.textContent = premioPuntos[index]
                newButtonUp.textContent = "Up"
                newButtonDown.textContent = "Down"

                tbodyClasiPilotos.append(newTr)
                newTr.append(newTdId)
                newTr.append(newTdNombre)
                newTr.append(newTdConstructor)
                newTr.append(newTdPuntos)
                newTr.append(newTdAcciones)
                newTdAcciones.append(newButtonUp)
                newTdAcciones.append(newButtonDown)

                newButtonUp.addEventListener("click", (e) => {
                    e = e.target
                    moverArriba(e, resultado.id, resultado.nombre, resultado.constructor, resultado.puntos, index)
                })

                newButtonDown.addEventListener("click", (e) => {
                    e = e.target
                    moverAbajo(e, resultado.id, resultado.nombre, resultado.constructor, resultado.puntos, index)
                })
            });
            
        })
}

function imprimirConstructores() {
    fetch(urlBase + consultas[1])
        .then( resp => resp.json() )
        .then( json => {
            json.forEach((resultado, index) => {
                let newTr = document.createElement("tr")
                let newTdId = document.createElement("td")
                let newTdNombre = document.createElement("td")
                let newTdPuntos = document.createElement("td")

                newTdId.textContent = resultado.id
                newTdNombre.textContent = resultado.nombre

                tbodyClasiConstructores.append(newTr)
                newTr.append(newTdId)
                newTr.append(newTdNombre)
                newTr.append(newTdPuntos)
            });
            
        })
}

function moverArriba(e, id, nombre, constructor, puntos, index) {
    let pilotoAnterior = allTbodyChildrenPilotos[index+1]
    let pilotoSiguiente = allTbodyChildrenPilotos[index-1]
}

function moverAbajo(e, nombre, index) {
    let pilotoAnterior = allTbodyChildrenPilotos[index+1]
    let pilotoSiguiente = allTbodyChildrenPilotos[index-1]
}


