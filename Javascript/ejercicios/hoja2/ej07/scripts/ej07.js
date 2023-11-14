let container = document.querySelector(".container")
let tbodyTablaClasificacion = document.querySelector("#tablaClasificacion tbody")

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]

imprimirClasifaciones()
celiaAdelantaRaul()

function imprimirClasifaciones() {
    let posicion = 0
    for (let i = 0; i < clasificaciones.length; i++) {
        newTr = document.createElement("tr")
        newTd1 = document.createElement("td")
        //newTd1.style.textAlign = "center"
        newTd2 = document.createElement("td")
        tbodyTablaClasificacion.append(newTr)
        posicion++
        newTd1.textContent = posicion
        newTd2.textContent = clasificaciones[i]
        newTr.append(newTd1)
        newTr.append(newTd2)
    }
}

function celiaAdelantaRaul() {
    
}