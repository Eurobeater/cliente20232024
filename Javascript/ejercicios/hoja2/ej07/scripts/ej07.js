let container = document.querySelector(".container")
let tbodyTablaClasificacion = document.querySelector("#tablaClasificacion tbody")

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]

console.log(clasificaciones)

imprimirClasifaciones()
celiaAdelantaRaul()
antonioDescalificado()

function imprimirClasifaciones() {
    console.log("imprimirClasifaciones")
    let posicion = 0
    for (let i = 0; i < clasificaciones.length; i++) {
        newTr = document.createElement("tr")
        newTd1 = document.createElement("td")
        newTd1.setAttribute("class", "puesto")
        newTd2 = document.createElement("td")
        newTd2.setAttribute("class", "nombre")
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

    for (let i = 0; i < tdClassNombre.length; i++) {
        tdClassNombre[i].textContent = clasificaciones[i]
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