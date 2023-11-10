const form = document.querySelector("#formEnvios")
const refPedido = document.querySelector("#refPedido")
const peso = document.querySelector("#peso")
const refPedidoError = document.querySelector("#refPedidoError")
const pesoError = document.querySelector("#pesoError")


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