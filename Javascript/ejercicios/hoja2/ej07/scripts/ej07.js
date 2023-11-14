let container = document.querySelector(".container")
let tbodyTablaClasificacion = document.querySelector("#tablaClasificacion tbody")

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]

imprimirClasifaciones()

function imprimirClasifaciones() {
    for (let i = 0; i < clasificaciones.length; i++) {
        newTr = document.createElement("tr")
        newTd = document.createElement("td")
        tbodyTablaClasificacion.append(newTr)
        newTd.textContent = clasificaciones[i]
        newTr.append(newTd)

        
    }
    
   
}