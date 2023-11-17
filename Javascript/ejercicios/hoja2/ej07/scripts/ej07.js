let container = document.querySelector(".container")
let tbodyTablaClasificacion = document.querySelector("#tablaClasificacion tbody")

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]

console.log(clasificaciones)

imprimirClasifaciones()
celiaAdelantaRaul()
antonioDescalificado()
nuevosParticipantes()

function imprimirClasifaciones() {
    console.log("imprimirClasifaciones")
    let posicion = 0
    
    let newThPuesto = document.createElement("th")
    newThPuesto.textContent = "Puesto"
    let newThNombre = document.createElement("th")
    newThNombre.textContent = "Nombre"

    tbodyTablaClasificacion.append(newThPuesto)
    tbodyTablaClasificacion.append(newThNombre)

    for (let i = 0; i < clasificaciones.length; i++) {
        let newTr = document.createElement("tr")
        let newTd1 = document.createElement("td")
        newTd1.setAttribute("class", "puesto")
        let newTd2 = document.createElement("td")
        newTd2.setAttribute("class", "nombre")
        /*
        if (newThPuesto.parentNode()) {
            
        }
        */
        tbodyTablaClasificacion.append(newTr)
        posicion++
        newTd1.textContent = posicion
        newTd2.textContent = clasificaciones[i]
        newTr.append(newTd1)
        newTr.append(newTd2)
    }
}

function celiaAdelantaRaul() {
    console.log("celiaAdelantaRaul")
    let adelantos = []
    let tdClassPuesto = document.querySelectorAll(".puesto")
    let tdClassNombre = document.querySelectorAll(".nombre")
    console.log(tdClassPuesto)
    console.log(tdClassNombre)

    adelantos.push(clasificaciones[3])
    adelantos.push(clasificaciones[2])
    clasificaciones.splice(2, 1, adelantos[0])
    clasificaciones.splice(3, 1, adelantos[1])
    
    console.log(clasificaciones)
    limpiarTabla(tdClassPuesto, tdClassNombre)
}

function limpiarTabla(tdClassPuesto, tdClassNombre) {
    console.log("limpiarTabla")
    console.log(tdClassPuesto)
    console.log(tdClassNombre)
   
   while (tbodyTablaClasificacion.hasChildNodes() == true) {
    tbodyTablaClasificacion.removeChild(tbodyTablaClasificacion.firstChild)
   }
}

function antonioDescalificado() {
    console.log("antonioDescalificado")
    let tdClassPuesto = document.querySelectorAll(".puesto")
    let tdClassNombre = document.querySelectorAll(".nombre")
    clasificaciones.pop()

    console.log(tdClassPuesto)
    
    if (tbodyTablaClasificacion.lastChild != null) {                    //no poner true o false. se utiliza si es null o no   alternativa: if (tbodyTablaClasificacion.lastChild) {     este if ha sido creado por chatgpt
        tbodyTablaClasificacion.removeChild(tbodyTablaClasificacion.lastChild)
    }
    console.log(clasificaciones)
    limpiarTabla(tdClassPuesto, tdClassNombre)
}

function nuevosParticipantes() {
    console.log("nuevosParticipantes")
    let tdClassPuesto = document.querySelectorAll(".puesto")
    let tdClassNombre = document.querySelectorAll(".nombre")

    clasificaciones.splice(1, 0, "Roberto", "Amaya")
    clasificaciones.splice(0, 0, "Marta")
    console.log(clasificaciones)

    limpiarTabla(tdClassPuesto, tdClassNombre)
    imprimirClasifaciones()
}