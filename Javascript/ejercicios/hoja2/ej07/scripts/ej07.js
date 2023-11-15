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
        newTd1.id = "td"+i
        newTd2 = document.createElement("td")
        newTd2.id = "td"+(i+1)
        tbodyTablaClasificacion.append(newTr)
        posicion++
        newTd1.textContent = posicion
        newTd2.textContent = clasificaciones[i]
        newTr.append(newTd1)
        newTr.append(newTd2)
    }
}

function celiaAdelantaRaul() {
    let adelantos = []
    adelantos.push(clasificaciones[3])
    adelantos.push(clasificaciones[2])
    clasificaciones.splice(2, 1, adelantos[0])
    clasificaciones.splice(3, 1, adelantos[1])
    
   
        newTd1.remove()
        //newtd2.remove()

        //newTd1.textContent = posicion
       // newtd2.textContent = clasificaciones
        newTd1.append(newTr)
          
        
    

    

    console.log(clasificaciones)
}