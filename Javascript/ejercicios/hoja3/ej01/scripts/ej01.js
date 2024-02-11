let nombres = ["Antonio", "Rafael", "Marcos", "Carlos", "Javier", "Sofía", "Paula", "Marta", "Belén", "Carlota"]
let apellidos = ["Rodriguez", "Gallego", "Fernández", "Sabater", "Meseguer", "Zapata", "Bautista", "Morales", "Álvarez", "Castro"]
let ciudades = ["Murcia", "Albacete", "Valencia", "Jaén", "Córdoba", "Segovia", "Barcelona", "Madrid", "A Coruña", "Bilbao"]

let personas = []

let container = document.querySelector(".container")
let divTabla = document.createElement("div")
container.append(divTabla)

let divBotones = document.createElement("div")
container.append(divBotones)

let newButtonOrdenarEdad = document.createElement("button")
newButtonOrdenarEdad.textContent = "Ordenar por edad"
divBotones.append(newButtonOrdenarEdad)

let newButtonPromedio = document.createElement("button")
newButtonPromedio.textContent = "Calcular promedio de edades"
divBotones.append(newButtonPromedio)

let newInputCiudad = document.createElement("input")
newInputCiudad.placeholder = "Filtrar nombre"
divBotones.append(newInputCiudad)

let newInputEdad = document.createElement("input")
newInputEdad.placeholder = "Filtrar edad"
divBotones.append(newInputEdad)

let newButtonOrdenarApellidos = document.createElement("button")
newButtonOrdenarApellidos.textContent = "Ordenar por apellidos"
divBotones.append(newButtonOrdenarApellidos)


//Generar un array de 10 personas aleatorias con nombres, apellidos, ciudad y edad aleatorios entre los arrays creados arriba
for (let i = 0; i < nombres.length; i++) {
    let randomNombre = parseInt(Math.random()*10)
    let randomApellido1 = parseInt(Math.random()*10)
    let randomApellido2 = parseInt(Math.random()*10)
    let randomCiudad = parseInt(Math.random()*10)
    let randomEdad = parseInt(Math.random()*(100 - 18) + 18)
    let persona = { nombre: nombres[randomNombre], apellido1: apellidos[randomApellido1], apellido2: apellidos[randomApellido2], ciudad: ciudades[randomCiudad], edad: randomEdad }
    personas.push(persona)
    console.log("persona")
    console.log(persona)
    }

    console.log("personas")
    console.log(personas)

    imprimirTabla(personas)
    ordenarMayorMenorEdad(personas)
    promedioEdades(personas)
    filtrarCiudad(personas)
    filtrarEdad(personas)
    ordenarApellido(personas)


function imprimirTabla(personas) {
    let newTable = document.createElement("table")
    let newTr1 = document.createElement("tr")
    let newThNombre = document.createElement("th")
    newThNombre.textContent = "Nombre"
    let newThApellido1 = document.createElement("th")
    newThApellido1.textContent = "Primer apellido"
    let newThApellido2 = document.createElement("th")
    newThApellido2.textContent = "Segundo apellido"
    let newThCiudad = document.createElement("th")
    newThCiudad.textContent = "Ciudad"
    let newThEdad = document.createElement("th")
    newThEdad.textContent = "Edad"

    newTable.classList.add("sm-table")
    divTabla.append(newTable)
    newTable.append(newTr1)
    newTr1.append(newThNombre)
    newTr1.append(newThApellido1)
    newTr1.append(newThApellido2)
    newTr1.append(newThCiudad)
    newTr1.append(newThEdad)
    
   personas.forEach(persona => {
        let newTr2 = document.createElement("tr")
       let newTdNombre = document.createElement("td")
       newTdNombre.textContent = persona.nombre
       let newTdApellido1 = document.createElement("td")
       newTdApellido1.textContent = persona.apellido1
       let newTdApellido2 = document.createElement("td")
       newTdApellido2.textContent = persona.apellido2
       let newTdCiudad = document.createElement("td")
       newTdCiudad.textContent = persona.ciudad
       let newTdEdad = document.createElement("td")
       newTdEdad.textContent = persona.edad

       newTable.append(newTr2)
       newTr2.append(newTdNombre)
       newTr2.append(newTdApellido1)
       newTr2.append(newTdApellido2)
       newTr2.append(newTdCiudad)
       newTr2.append(newTdEdad)
   });
}

function limpiarTabla() {
    let newTable = document.querySelector(".sm-table")
    newTable.remove()
}

function ordenarMayorMenorEdad(personas) {
    console.log("ordenarMayorMenorEdad")
    newButtonOrdenarEdad.addEventListener("click", () => {
        console.log("eventoBoton")
        personas.sort((a, b) => b.edad - a.edad);
        console.log(personas)
        limpiarTabla()
        imprimirTabla(personas)
    })
}

function promedioEdades(personas) {
    console.log("promedioEdades")
    let newP = document.createElement("p")
    let promedio
    let sumaEdades = 0
    for (let i = 0; i < personas.length; i++) {
        sumaEdades += personas[i].edad
    }

    newButtonPromedio.addEventListener("click", () => {
        console.log("boton promedioEdades")
        console.log(sumaEdades)
        promedio = sumaEdades / personas.length
        console.log(promedio)
        newP.textContent = "Promedio de edad: " +promedio
        container.append(newP)
    })
}

function filtrarCiudad(personas) {
    console.log("filtrarCiudad");
    newInputCiudad.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        console.log("evento filtrar ciudades")
        if (newInputCiudad.value == "") {               //si el campo está vacío, reimprime la tabla sin ningún filtro
            limpiarTabla()
            imprimirTabla(personas)
        } else {
            const ciudadFiltrar = newInputCiudad.value
            const ciudadesFiltradas = personas.filter(persona => persona.ciudad === ciudadFiltrar);             //crear un nuevo array llamado cochesFiltrados. la función filter se ejecuta por cada elemento del array coches. toma de parámetro 'coche', que representa un elemento del array. compara el valor de coche.fabricante con fabricanteFiltrar, si lo es, lo añade al array cochesFiltrados.
            limpiarTabla();
            imprimirTabla(ciudadesFiltradas)            //con pasar el array de ciudades filtradas es suficiente
            console.log(ciudadesFiltradas);
        }
    }
    })
}

function filtrarEdad(personas) {
    console.log("filtrarEdad");
    newInputEdad.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        console.log("evento filtrar edades")
        if (newInputEdad.value == "") {               //si el campo está vacío, reimprime la tabla sin ningún filtro
            limpiarTabla()
            imprimirTabla(personas)
        } else {
            const edadFiltrar = parseInt(newInputEdad.value)
            const edadesFiltradas = personas.filter(persona => persona.edad > edadFiltrar);             //crear un nuevo array llamado cochesFiltrados. la función filter se ejecuta por cada elemento del array coches. toma de parámetro 'coche', que representa un elemento del array. compara el valor de coche.fabricante con fabricanteFiltrar, si lo es, lo añade al array cochesFiltrados.
            limpiarTabla();
            imprimirTabla(edadesFiltradas)            //con pasar el array de edades filtradas es suficiente
            console.log(edadesFiltradas);
        }
    }
    })
}

function ordenarApellido(personas) {
    console.log("ordenarApellido");
    newButtonOrdenarApellidos.addEventListener("click", () => {
        personas.sort((a, b) => {
            // Compara por apellido1 y, si son iguales, por apellido2
            if (a.apellido1 === b.apellido1) {                                      //Si dos objetos tienen el mismo apellido1, utiliza localeCompare para ordenarlos por el atributo apellido2. sort() utiliza lo que devuelve la función localeCompare() para interpretar el órden de los apellidos si coinciden
                return a.apellido2.localeCompare(b.apellido2);                      //si devuelve -1, la cadena 'a' va ANTES que la cadena 'b'. si devuelve 0, ambas cadenas son iguales. si devuelve 1 significa que la cadena 'a' va DESPUÉS de la cadena 'b'
            } else {
                return a.apellido1.localeCompare(b.apellido1);
            }
        });
        
        console.log(personas);
        limpiarTabla();
        imprimirTabla(personas);
    });
}
