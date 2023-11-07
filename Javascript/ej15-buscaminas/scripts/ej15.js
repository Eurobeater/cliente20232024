const ANCHO_TABLERO = 3
const ALTO_TABLERO = 3
const NUM_MINAS = 1
const ANCHO_CELDA = 30
const TABLERO = document.querySelector("#tablero")
const labelFila = document.querySelector("#fila")
const labelCol = document.querySelector("#columna")
const labelMina = document.querySelector("#mina")
const labelTiempo = document.querySelector("#tiempo")

let celdasVaciasPorClicar = ANCHO_TABLERO * ANCHO_TABLERO - NUM_MINAS               //el maximo sera el ancho por el alto

let tablaRecords = []
if (localStorage.getItem("records")) {
    tablaRecords = JSON.parse(localStorage.getItem("records"))          //JSON.parse es para pasarlo a un objeto JavaScript
    imprimirRecords()
}

function generarTablero(ancho, alto) {
    TABLERO.style.width = ANCHO_CELDA * ancho +"px"                 //se establece el ancho del tablero en función del ancho de cada celda (ANCHO_CELDA) multiplicado por la cantidad de celdas en el ancho (ancho)
    for (let i = 0; i < ancho * alto; i++) {                        //recorre todas las celdas del tablero. ejecuta  ancho * alto veces para crear todas las celdas
        let newCelda = document.createElement("div")                //se crea divs (celdas) en este bucle, representando una celda del tablero
        newCelda.classList.add("celda")                             //por cada div creado, se le aplica la clase .celda
        newCelda.dataset.fila = Math.floor(i / ancho)               //se crean los atributos (atributos data, estableciendose con dataset) para rastrear la fila. se calcula dividiendo (i) entre el ancho del tablero (ancho), obteniendo el número de  (lo pasa a entero)
        newCelda.dataset.col = i % ancho                            //para rastrear la columna. se calcula utilizando el operador % dividiendo i (i, la posición de la celda) por el ancho (ancho, n de columnas en el tablero) y toma el resto, dando el número de columna
        newCelda.dataset.mina = false                               //rastrear si contiene una mina
        newCelda.dataset.clicada = false                            //rastrear si ya ha sido clicada
        TABLERO.append(newCelda)                                    //se agregan al tablero
    }
}

function colocarMinas(ancho, alto, numMinas) {                          //ancho = n de columnas, alto = n de filas del tablero. coloca minas en el tablero de acuerdo al numero de éstas (numMinas)
    let minasPorColocar = numMinas                                      //para saber cuántas minas quedan por colocar en el tablero
    const TODAS_LAS_CELDAS = TABLERO.querySelectorAll("div.celda")      //se obtienen todas las celdas del tablero de la clase .celda, para facilitar el acceso a todas las celdas
    while (minasPorColocar) {                                           //si todavia hay minas por colocar (hasta que es hayan colocado todas las minas, mientras que minasPorColocar > 0)
        let posicion = Math.floor(Math.random()* (ancho * alto))        //selecciona aleatoriamente las celdas en el tablero (entre 0 y ancho x alto -1. resultado = entre 0 y n total de celdas) y marca estas celdas como minas (dataset.mina == true) y añade la clase .mina
        if (todasLasCeldas[posicion].dataset.mina == "false") {         //verificar si la posicion no tiene mina. si no tiene, se coloca una mina
            todasLasCeldas[posicion].dataset.mina = true                //indica que la posicion de esta celda tiene mina
            //todasLasCeldas[posicion].classList.add("mina")              //se agrega la clase .mina a la celda especificada.
            minasPorColocar--
        }
    }
}

function calcularMinasAlrededor(f, c) {        //fila y columna                         //calcula cuantas minas hay alrededor de una celda específica. recorre las celdas y cuenta las minas que encuentre
    let contador = 0                                                                    //rastrear la cantidad de minas que se encuentran alrededor de la celda especificada
    for (let i = f-1; i <= f+1; i++) {                                                  //recorrer FILAS. recorrer las celdas a la celda en la fila (f) y columna (c). este bucle recorre las filas a circundantes a la fila (f). COMIENZA UNA FILA ANTES (o por encima) DE LA FILDA DE LA CELDA (f-1), se ejecuta hasta que (i) sea igual a f+1 (una fila por debajo de la actual, f+1)
        for (let j = c-1; j <= c+1; j++) {                                              //recorre las COLUMNAS circundanetes a la columna (c). Comienza una columna antes de la columna de la celda (c-1,), continúa hasta una columna después de la columna de la celda (c+1, hasta una columna a la derecha de la celda actual)
            if (i>=0 && i<=ALTO_TABLERO-1 && j>=0 && j<=ANCHO_TABLERO-1) {              // si los valores de i y j (filas y columnas circundantes) están dentro de los límites del tablero. para que no se acceda a las celdas fuera del tablero
                let posicion = i*ANCHO_TABLERO + j                                      //calcula la posición del tablero basandose en los valores de i y j. Multiplica la fila (i) por el ancho del tablero (ANCHO_TABLERO) y sumando la columna (j)
                if (todasLasCeldas[posicion].dataset.mina == "true") contador++         //verifica si la celda en la posición calculada (posicion) contiene una mina. si la tiene, se incrementa el contador en 1 
            }
        }
    }
    return contador                                                                     //devuelve el valor de contador, que indica cuantas minas se encuentran alrededor de la celda en la fila (f) y columna (c)
}

function bloquearTablero() {
    todasLasCeldas.forEach(celda => {
        celda.dataset.clicada = true                        //establecer el atributo dataset a true, considerada clicada, para no poder interactuar con ella
        if (celda.dataset.minam == "true") {                //si la celda es una celda clicada, agrega la clase .mina a la celda
            celda.classList.add("mina")
        }
    });
}

function imprimirRecords() {
    const cuerpo = document.querySelector("#tablaPuntuaciones>tbody")
    cuerpo.innerHTML = ""
    tablaRecords.forEach( (r,i) => {
        let nuevaFila = cuerpo.insertRow()
        let celda1 = nuevaFila.insertCell()
        let celda2 = nuevaFila.insertCell()
        let celda3 = nuevaFila.insertCell()
        celda1.textContent = i + 1
        celda2.textContent = "Antonio"
        celda3.textContent = r
    })
}

generarTablero(ANCHO_TABLERO, ALTO_TABLERO)                                     //se genera el tablero y se colocan las minas en él usando las funciones generaTablero y colocarMinas
const todasLasCeldas = tablero.querySelectorAll("div.celda")
colocarMinas(ANCHO_TABLERO, ALTO_TABLERO, NUM_MINAS)

labelTiempo.textContent = 0
let crono = setInterval( () => {labelTiempo.textContent++}, 1000)

TABLERO.addEventListener("mousemove", function(e){              //(e) representa el evento de movimiento de mouse
    if (e.target.classList.contains("celda")) {                 //si el objetivo del evento (a donde apunta el evento) tiene la clase celda, (acceder a una celda específica)
        labelFila.textContent = e.target.dataset.fila           //se actualizan las etiquetas fila y columna de la celda a la que apunta el cursor
        labelCol.textContent = e.target.dataset.col
        labelMina.textContent = e.target.dataset.mina
    }
})

tablero.addEventListener("click",function(e){                                   //manejar las interacciones del juego
    if (e.target.classList.contains("celda")) {
        //comprobar si ya ha sido clicada la celda previamente
        if (e.target.dataset.clicada == "false") {                              
            e.target.dataset.clicada = true                                     //si no es clicada la celda, se indica que es true y se verifica si tiene mina
            //comprobar si explota mina
            if (e.target.dataset.mina == "true") {                              //si contiene una mina (la clicada), muestra una alerta indicando que el jugador ha perdido
                //mostrar todas las minas
                //cambiar el aspecto de la mina clicada
                e.target.classList.add("mina_explotada")             //si pincha en mina, cambia a la clase mina_explotada
                //fin de la partida
                //detener el crono
                clearInterval(crono)
                //detener la posibilidad de que el usuario siga clicando
                //y mostrar todas las minas
                todasLasCeldas.forEach(celda => {
                    celda.dataset.clicada = true
                    if (celda.dataset.minam == "true") {
                        celda.classList.add("mina")
                    }
                });
                alert("mueres")
                bloquearTablero()
            } else {                                               //si no explota la mina, llama a la función calcularMinasAlrededor para obtener el número de minas adyacenetes y se agrega una clase para mostrar la cantidad
                //si no has explotado mina
                let minasAlrededor = calcularMinasAlrededor(parseInt(e.target.dataset.fila) , parseInt(e.target.dataset.col))
                e.target.classList.add("celda_clicada" + minasAlrededor)
                //contar si has ganado
                celdasVaciasPorClicar--
                if (celdasVaciasPorClicar == 0) {           //si ya no quedan mas celdas por clicar, se gana
                    //victoria
                    clearInterval(crono)
                    tablaRecords.push(parseInt(labelTiempo.textContent))
                    tablaRecords.sort((a,b) => a - b)        //ordenar alfabeticamente
                    localStorage.setItem("records", JSON.stringify(tablaRecords))
                    console.log(tablaRecords)
                    bloquearTablero()
                    imprimirRecords()
                }
            }
        }
    }
})