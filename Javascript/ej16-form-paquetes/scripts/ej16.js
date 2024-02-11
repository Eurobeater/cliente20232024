const form = document.querySelector("#formEnvios")
const refPedido = document.querySelector("#refPedido")
const peso = document.querySelector("#peso")
const refPedidoError = document.querySelector("#refPedidoError")
const pesoError = document.querySelector("#pesoError")
const anyadir = document.querySelector("#anyadir")
//const tbodyTablaEnvios = document.querySelector("#tablaEnvios tbody");                  //marcar el tbody de la tabla, que es su elemento hijo
const allTdTablaEnviosTbody = document.querySelectorAll("#tablaEnvios td");                  //marcar todos los Tds del tbody de la tabla tablaEnvios

console.log(allTdTablaEnviosTbody)

let productosTabla = []
let refPedidosTabla = []
let pesosTabla = []

form.action = "server/todoOK.html"

form.addEventListener("submit", (e) => {
    e.preventDefault()      //evitar enviar el formulario sin validarlo
    if (todoOK() ) form.submit()            //this.submit si no es una funcion flecha
})

function todoOK() {
    let bandera = true                               //para evitar que se cargue el formulario, si alguno del los inputs no es correcto
    //comprobar el input de nº de referencia
    let ref = refPedido.value
    let regExpRefPedido = /^[A-E]\d{4}$/
    if (!regExpRefPedido.test(ref)) {                         //si ref no pasa la regexp, todoOk = false
        bandera = false      
        refPedidoError.textContent = "El nº de referencia no sigue el formato"
    } else {
        refPedidoError.textContent = ""
    }                                 
    //comprobar el input del peso del paquete
    let valuePeso = peso.value
    let regExpPeso = /^\d{1,2}[.,]\d$/

    if (!regExpPeso.test(valuePeso)) {                         //si ref no pasa la regexp, todoOk = false
        bandera = false      
        pesoError.textContent = "El peso no sigue el formato"
    } else {
        pesoError.textContent = ""
    }
    return bandera
}

anyadir.addEventListener("click", () => {
    // Obtener los valores de referencia y peso
    let newPRef = document.createElement("p")
    let newPPeso = document.createElement("p")
    let newPOpciones = document.createElement("p")

    refPedidosTabla.push(refPedido.value)
    pesosTabla.push(peso.value)
    console.log(refPedidosTabla)
    console.log(pesosTabla)
    
   // Validar y agregar los valores a la tabla (Evitar se añadan elementos vacios al objeto)
   if (todoOK()) {
    //let nuevoProducto = { refPedido: ref, peso: pesoValue };                        //esto es un objeto
    //productosTabla.push(nuevoProducto);                                             //añade el objeto al Array con el metodo push()
    for (let i = 0; i < refPedidosTabla.length && pesosTabla.length; i++) {
        newPRef.textContent = refPedidosTabla[i]
        allTdTablaEnviosTbody[0].append(newPRef)
        newPPeso.textContent = pesosTabla[i]
        allTdTablaEnviosTbody[1].append(newPPeso)
        newPOpciones.textContent = "No disponible en estos momentos"
        allTdTablaEnviosTbody[2].append(newPOpciones)
    }
}
})