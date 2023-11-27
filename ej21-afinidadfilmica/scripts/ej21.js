//Buscador películas derecha
let inputBuscadorR = document.querySelector("#buscadorR")
let allUlListaResultadosR = document.querySelectorAll(".listaResultadosR")

console.log(allUlListaResultadosR)

//Botones izquierda
let allSeleccionados = document.querySelectorAll("td>input")
allSeleccionados[0].addEventListener("click", marcarDirectores)
allSeleccionados[1].addEventListener("click", marcarPeliculas)
allSeleccionados[2].addEventListener("click", marcarActores)
allSeleccionados[3].addEventListener("click", borrarMarcador)

console.log(allSeleccionados)




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

function marcarDirectores() {
    let ulHijosDirectores = allUlListaResultadosR[1].childNodes

    for (let i = 0; i < ulHijosDirectores.length; i++) {
        ulHijosDirectores[i].style.backgroundColor = "yellow"
        ulHijosDirectores[i].style.margin = "5px"
    }
}

function marcarPeliculas() {
    let ulHijosPeliculas = allUlListaResultadosR[0].childNodes

    for (let i = 0; i < ulHijosPeliculas.length; i++) {
        ulHijosPeliculas[i].style.backgroundColor = "yellow"
        ulHijosPeliculas[i].style.margin = "5px"
    }
}

function marcarActores() {
    let ulHijosActores = allUlListaResultadosR[2].childNodes

    for (let i = 0; i < ulHijosActores.length; i++) {
        ulHijosActores[i].style.backgroundColor = "yellow"
        ulHijosActores[i].style.margin = "5px"
    }
}

function borrarMarcador() {
    let ulHijosPeliculas = allUlListaResultadosR[0].childNodes
    let ulHijosDirectores = allUlListaResultadosR[1].childNodes
    let ulHijosActores = allUlListaResultadosR[2].childNodes

    for (let i = 0; i < ulHijosPeliculas.length; i++) {
        ulHijosPeliculas[i].style.backgroundColor = ""
        ulHijosPeliculas[i].style.margin = "0px"
    }

    for (let i = 0; i < ulHijosDirectores.length; i++) {
        ulHijosDirectores[i].style.backgroundColor = ""
        ulHijosDirectores[i].style.margin = "0px"
    }

    for (let i = 0; i < ulHijosActores.length; i++) {
        ulHijosActores[i].style.backgroundColor = ""
        ulHijosActores[i].style.margin = "0px"
    }
}