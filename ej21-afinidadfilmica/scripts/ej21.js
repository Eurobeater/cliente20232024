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


//IZQUIERDA

let inputBuscadorL = document.querySelector("#buscadorL")
let tipoL = document.querySelector("#divBuscadorL select")
let divResultadosL = document.querySelector("#divResultadosL")

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
}