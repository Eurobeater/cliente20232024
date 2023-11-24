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

//Buscador películas derecha
let inputBuscadorR = document.querySelector("#buscadorR")
let allUlListaResultadosR = document.querySelectorAll(".listaResultadosR")
console.log(allUlListaResultadosR)

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
