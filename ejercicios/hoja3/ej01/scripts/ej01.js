let nombres = ["Antonio", "Rafael", "Marcos", "Carlos", "Javier", "Sofía", "Paula", "Marta", "Belén", "Carlota"]
let apellidos = ["Rodriguez", "Gallego", "Fernández", "Sabater", "Meseguer", "Zapata", "Bautista", "Morales", "Álvarez", "Castro"]
let ciudades = ["Murcia", "Albacete", "Valencia", "Jaén", "Córdoba", "Segovia", "Barcelona", "Madrid", "A Coruña", "Bilbao"]

let divTabla = document.createElement("div")

//randomPersonas()
/*
function randomPersonas() {
    console.log("randomPersonas")
    let personas = []
    for (let i = 0; i < nombres.length; i++) {
        let randomNombre = parseInt(Math.random()*10)
        let randomApellido1 = parseInt(Math.random()*10)
        let randomApellido2 = parseInt(Math.random()*10)
        let randomCiudad = parseInt(Math.random()*10)
        let randomEdad = parseInt(Math.random()*(100 - 18) + 18)
        let persona = { nombre: nombres[randomNombre], apellido1: apellidos[randomApellido1], apellido2: apellidos[randomApellido2], ciudad: ciudades[randomCiudad], edad: randomEdad }
        personas.push(persona)
        console.log("persona")
        console.log(persona)
    }
    console.log("personas")
    console.log(personas)
    imprimirTabla(personas)
}
*/

console.log("codigoRaiz")
    let personas = []
    for (let i = 0; i < nombres.length; i++) {
        let randomNombre = parseInt(Math.random()*10)
        let randomApellido1 = parseInt(Math.random()*10)
        let randomApellido2 = parseInt(Math.random()*10)
        let randomCiudad = parseInt(Math.random()*10)
        let randomEdad = parseInt(Math.random()*(100 - 18) + 18)
        let persona = { nombre: nombres[randomNombre], apellido1: apellidos[randomApellido1], apellido2: apellidos[randomApellido2], ciudad: ciudades[randomCiudad], edad: randomEdad }
        personas.push(persona)
        console.log("persona")
        console.log(persona)
    }

    console.log("personas")
    console.log(personas)
    imprimirTabla(personas)
    ordenarMayorMenorEdad(personas)

function imprimirTabla(personas) {
    let container = document.querySelector(".container")
    let newTable = document.createElement("table")
    let newTr1 = document.createElement("tr")
    let newThNombre = document.createElement("th")
    newThNombre.textContent = "Nombre"
    let newThApellido1 = document.createElement("th")
    newThApellido1.textContent = "Primer apellido"
    let newThApellido2 = document.createElement("th")
    newThApellido2.textContent = "Segundo apellido"
    let newThCiudad = document.createElement("th")
    newThCiudad.textContent = "Ciudad"
    let newThEdad = document.createElement("th")
    newThEdad.textContent = "Edad"

    newTable.classList.add("sm-table")
    container.append(newTable)
    newTable.append(newTr1)
    newTr1.append(newThNombre)
    newTr1.append(newThApellido1)
    newTr1.append(newThApellido2)
    newTr1.append(newThCiudad)
    newTr1.append(newThEdad)

    for (let i = 0; i < personas.length; i++) {
       let newTr2 = document.createElement("tr")
       let newTdNombre = document.createElement("td")
       newTdNombre.textContent = personas[i].nombre
       let newTdApellido1 = document.createElement("td")
       newTdApellido1.textContent = personas[i].apellido1
       let newTdApellido2 = document.createElement("td")
       newTdApellido2.textContent = personas[i].apellido2
       let newTdCiudad = document.createElement("td")
       newTdCiudad.textContent = personas[i].ciudad
       let newTdEdad = document.createElement("td")
       newTdEdad.textContent = personas[i].edad
       newTable.append(newTr2)
       newTr2.append(newTdNombre)
       newTr2.append(newTdApellido1)
       newTr2.append(newTdApellido2)
       newTr2.append(newTdCiudad)
       newTr2.append(newTdEdad)
    }
}

function limpiarTabla() {
    let newTable = document.querySelector(".sm-table")
    newTable.remove()
}

function ordenarMayorMenorEdad(personas) {
    console.log("ordenarMayorMenorEdad")
    let container = document.querySelector(".container")
    let newButton = document.createElement("button")
    newButton.id = "botonMayorMenorEdad"
    newButton.textContent = "Ordenar por edad"
    container.append(newButton)

    newButton.addEventListener("click", () => {
        console.log("eventoBoton")
        personas.sort((a, b) => b.edad - a.edad);
        console.log(personas)
        limpiarTabla()
        imprimirTabla(personas)
    })
}