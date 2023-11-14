const buscador = document.querySelector("#buscador")
const bodyResul = document.querySelector("#tableResultados>tbody")

function mostrarResultados(json) {
    bodyResul.innerHTML = ""                                //cargarse todos los hijos del tbody de esta tabla
    json.forEach(resultado => {
        let newTr = bodyResul.insertRow()
        let celda1 = bodyResul.insertCell()
        let celda2 = bodyResul.insertCell()
        let celda3 = bodyResul.insertCell()
        celda1.textContent = resultado.titulo
        celda2.textContent = resultado.precio
        let btnAdd = document.createElement("button")
        btnAdd.addEventListener("click", () => addToCart( resultado ) ) 
        celda3.append(btnAdd)
    });
}

buscador.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        alert("El usuario ha escrito: " +buscador.value)
                                                            
        //solicitamos la recuperación de un recurso en la red (PHP de consulta)
        fetch("server/gpushop.php?pattern=" +buscador.value)
        //cuando el fetch reciba la respuesta del servidor, la desempaquetamos (HTTP)
        .then( resp => resp.json() )
        //cuando acabe el parse de los datos útiles de la respuesta, los procesamos (llama a la función mostrarResultados, cuyo parámetro es json)
        .then(json => mostrarResultados(json))
    }
})