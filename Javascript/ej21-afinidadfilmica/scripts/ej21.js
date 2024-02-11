//Buscador películas derecha
let inputBuscadorR = document.querySelector("#buscadorR")
let allUlListaResultadosR = document.querySelectorAll(".listaResultadosR")

console.log(allUlListaResultadosR)

/*
@@@@ EXPLICACIÓN PHP @@@@

1.  En el código PHP, al construir las sugerencias, se crean objetos de la clase sugerencia que tienen tres propiedades: id, texto y tipo. 

    class sugerencia {
    var $id;
    var $texto;
    var $tipo;
}

// ...

$newSugerencia = new sugerencia();
$newSugerencia->id = $row['id'];
$newSugerencia->texto = $row['titulo'];  // Aquí usas $row['titulo'] para la propiedad 'texto'
$newSugerencia->tipo = 'tit';
$sugerencias[] = $newSugerencia;

2.  $row['titulo'] (línea 18 en search.php) se asigna a la propiedad texto de la sugerencia (sugerencia es una clase).
    Luego, en el código JavaScript, cuando recuperas estos datos JSON, cada elemento en el array tiene una propiedad
    llamada texto, no peliculas.


*/

inputBuscadorR.addEventListener("keyup", () => {
        //solicitamos la recuperación de un recurso en la red (PHP de consulta)
        fetch("server/search.php?p="+inputBuscadorR.value)
        //cuando el fetch reciba respuesta del servidor, la desempaquetamos (HTTP)
        .then( resp => resp.json() )
        //cuando acabe el parseo de los datos útiles de la respuesta, los procesamos
        .then( json => mostrarResultados(json) )
})

function mostrarResultados(json) {
    allUlListaResultadosR[0].innerHTML = ""
    allUlListaResultadosR[1].innerHTML = ""
    allUlListaResultadosR[2].innerHTML = ""

    json.forEach( resultado => {
        if (resultado.tipo == "tit") {
            let newLiPeliculas = document.createElement("li")
            newLiPeliculas.textContent = resultado.texto
            allUlListaResultadosR[0].append(newLiPeliculas)
        }else if (resultado.tipo == "dir") {
            let newLiDirectores = document.createElement("li")
            newLiDirectores.textContent = resultado.texto
            allUlListaResultadosR[1].append(newLiDirectores)
        } else {
            let newLiActores = document.createElement("li")
            newLiActores.textContent = resultado.texto
            allUlListaResultadosR[2].append(newLiActores)
        }
    })
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@ IZQUIERDA @@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let inputBuscadorL = document.querySelector("#buscadorL")
let tipoL = document.querySelector("#divBuscadorL select")
let divResultadosL = document.querySelector("#divResultadosL")
let divSeleccionadosL = document.querySelector("#divSeleccionadosL>table>tbody")
let todosBotones = document.querySelectorAll("#divSeleccionadosL tfoot button")

inputBuscadorL.addEventListener("keyup", function() {
    //Definir estas variables y hacer la búsqueda. patron es lo que el usuario ha escrito en el input
    let patron = this.value.trim()              //inputBuscadorL.value                
    divResultadosL.innerHTML = ""
    if (patron != "") buscar(patron)            //si el campo no está vacío, se hace la búsqueda
})

tipoL.addEventListener("change", function() {
    //Definir estas variables y hacer la búsqueda
    let patron = inputBuscadorL.value.trim()
    divResultadosL.innerHTML = ""
    if (patron != "") buscar(patron)
})

function buscar(patron) {
    divResultadosL.innerHTML = ""
    fetch("server/search.php?p=" +patron)           
    .then( resp => resp.json())
    .then( json => {
        json.forEach( r => {                        //por cada resultado r en el json:
            switch (tipoL.value) {
                case "0": addResultado(r.texto, r.tipo); break
                case "1": if(r.tipo == "tit") addResultado(r.texto, r.tipo); break
                case "2": if(r.tipo == "act") addResultado(r.texto, r.tipo); break
                case "3": if(r.tipo == "dir") addResultado(r.texto, r.tipo); break
            }
        })                        
    })               
}

function addResultado(texto, tipo) {
    let nuevoResultado = document.createElement("div")
    nuevoResultado.textContent = texto
    divResultadosL.append(nuevoResultado)
    nuevoResultado.classList.add("resul")
    nuevoResultado.dataset.tipo = tipo                  //poner un dataset en el elemento html para identificar por pelicula, director o actor. para despues poder marcarlos con los botones
}

divResultadosL.addEventListener("click", function(e) {
    if (e.target.classList.contains("resul")) {
        let nuevoTR = divSeleccionadosL.insertRow()
        let nuevoTD1 = nuevoTR.insertCell()
        let nuevoTD2 = nuevoTR.insertCell()
        nuevoTD2.textContent = e.target.textContent
        
        let nuevoCB = document.createElement("input")       //CB es checkbox, en este caso es el CB maestro (el que selecciona todos)
        nuevoCB.type = "checkbox"                           //modificar el atributo del input para que sea de tipo checkbox (type)
        nuevoTD1.append(nuevoCB)
        nuevoTR.dataset.tipo = e.target.dataset.tipo            //capturar el evento target para tener en cuenta a los hijos. al añadirse a la tabla, se crea un dataset cuyo valor es el tipo (actor, pelicula o director)
    }
})

//No hemos usado una variable para guardar el input de Seleccionados
document.querySelector("#divSeleccionadosL thead input").addEventListener("change", function() {                //coge el primer input que hay en el thead              usar e.target si es flecha en este caso
    let todosCB = divSeleccionadosL.querySelectorAll("input[type=checkbox]")                                    //coger todos los inputs que sean de tipo checkbox
    todosCB.forEach( cb => cb.checked = this.checked )                     //this en este caso es la linea del document.querySelector (linea 124)

})

todosBotones[3].addEventListener("click", function() {                          //boton borrar, es el tercer elemento del querySelectorAll
    let todasFilas = divSeleccionadosL.querySelectorAll("tr")

    todasFilas.forEach( fila => {
        let filaCB = fila.querySelector("input")                    //recuperar el checkbox de la fila especifica
        
        if (filaCB.checked) fila.remove()                           //si el input esta checkado, se borra dicha fila o filas
    })
})

todosBotones[0].addEventListener("click", function() {                          //boton marcar peliculas    
    marcarFilas("tit")
})

todosBotones[1].addEventListener("click", function() {                          //boton marcar actores    
    marcarFilas("act")
})

todosBotones[2].addEventListener("click", function() {                          //boton marcar directores    
    marcarFilas("dir")
})

function marcarFilas(tipo) {
    let todasFilas = divSeleccionadosL.querySelectorAll("tr")

    todasFilas.forEach( fila => {
        if (fila.dataset.tipo == tipo) {
            fila.querySelector("input").checked = true
        }                      
    })
}