let container = document.querySelector(".container")
let newTable = document.createElement("table")

let coches = [  { fabricante: "Toyota", modelo: "Supra MKIV (JZA80)", precio: 82440 }, 
                { fabricante: "Ford", modelo: "Mustang GT", precio: 56000 },            
                { fabricante: "Mazda", modelo: "RX-7 (FD3S)", precio: 22450 },
                { fabricante: "Mitsubishi", modelo: "Lancer Evolution VIII", precio: 26220 },       
                { fabricante: "BMW", modelo: "M3 (E46)", precio: 8150 },
            ]
console.log(coches)
console.log(typeof(coches))

imprimirTabla()
precioDescendente()
ordenarFabricante()
filtrarFabricante()
filtrar20000()

function imprimirTabla() {
    console.log("imprimirTabla")
    newTable.classList.add("sm-table")
    container.append(newTable)
    
    let newTr1 = document.createElement("tr")
    newTable.append(newTr1)
    let newThFab = document.createElement("th")
    newThFab.textContent = "Fabricante"
    newThFab.style.textAlign = "center"
    newTr1.append(newThFab)
    let newThModelo = document.createElement("th")
    newThModelo.textContent = "Modelo"
    newThModelo.style.textAlign = "center"
    newTr1.append(newThModelo)
    let newThPrecio = document.createElement("th")
    newThPrecio.textContent = "Precio"
    newThPrecio.style.textAlign = "center"
    newTr1.append(newThPrecio)
    
    let newTr2 = document.createElement("tr")
    newTable.append(newTr2)
    
    coches.forEach(coche => {
        let newTr = document.createElement("tr")
        newTable.append(newTr)

        let newTdFabricante = document.createElement("td")
        newTdFabricante.textContent = coche.fabricante
        newTr.append(newTdFabricante)

        let newTdModelo = document.createElement("td")
        newTdModelo.textContent = coche.modelo
        newTr.append(newTdModelo)

        let newTdPrecio = document.createElement("td")
        newTdPrecio.textContent = coche.precio
        newTr.append(newTdPrecio)
    });
}

function imprimirTablaFiltrada() {
    console.log("imprimirTablaFiltrada")
    newTable.classList.add("sm-table")
    container.append(newTable)
    
    let newTr1 = document.createElement("tr")
    newTable.append(newTr1)
    let newThFab = document.createElement("th")
    newThFab.textContent = "Fabricante"
    newThFab.style.textAlign = "center"
    newTr1.append(newThFab)
    let newThModelo = document.createElement("th")
    newThModelo.textContent = "Modelo"
    newThModelo.style.textAlign = "center"
    newTr1.append(newThModelo)
    let newThPrecio = document.createElement("th")
    newThPrecio.textContent = "Precio"
    newThPrecio.style.textAlign = "center"
    newTr1.append(newThPrecio)
}

function limpiarTabla() {
    console.log("limpiarTabla")
    let table = document.querySelector(".sm-table")
    while (table.hasChildNodes() == true) {
        table.removeChild(table.lastChild)
   }
}

function precioDescendente() {
    console.log("precioDescendente")
    // Ordenar por precio de forma descendente
    coches.sort((a, b) => b.precio - a.precio);
    console.log(coches)
    limpiarTabla()
    imprimirTabla()
}

function ordenarFabricante() {
    console.log("ordenarFabricante")
    // Ordenar por fabricante de forma descendente
    coches.sort((a, b) => a.fabricante.localeCompare(b.fabricante));
    console.log(coches)
    limpiarTabla()
    imprimirTabla()
}

function filtrarFabricante() {
    console.log("filtrarFabricante");
    // Fabricante que quieres filtrar
    const fabricanteFiltrar = "Toyota";
    // Filtrar los coches por el fabricante deseado
    const cochesFiltrados = coches.filter(coche => coche.fabricante === fabricanteFiltrar);             //crear un nuevo array llamado cochesFiltrados. la función filter se ejecuta por cada elemento del array coches. toma de parámetro 'coche', que representa un elemento del array. compara el valor de coche.fabricante con fabricanteFiltrar, si lo es, lo añade al array cochesFiltrados.
    // Limpiar la tabla antes de imprimir los resultados filtrados
    limpiarTabla();
    imprimirTablaFiltrada()
    // Crear filas y celdas para cada coche filtrado y agregarlos a la tabla
    cochesFiltrados.forEach(coche => {
        let newTr = document.createElement("tr");
        newTable.append(newTr);

        let newTdFabricante = document.createElement("td");
        newTdFabricante.textContent = coche.fabricante;
        newTr.append(newTdFabricante);

        let newTdModelo = document.createElement("td");
        newTdModelo.textContent = coche.modelo;
        newTr.append(newTdModelo);

        let newTdPrecio = document.createElement("td");
        newTdPrecio.textContent = coche.precio;
        newTr.append(newTdPrecio);
    });
    console.log(cochesFiltrados);
}

function filtrar20000() {
    console.log("filtrar20000")
    // Precio que quieres filtrar
    const precioFiltrar = 20000;
    // Filtrar los coches por el precio deseado
    const cochesFiltrados = coches.filter(coche => coche.precio > precioFiltrar);             //crear un nuevo array llamado cochesFiltrados. la función filter se ejecuta por cada elemento del array coches. toma de parámetro 'coche', que representa un elemento del array. compara el valor de coche.fabricante con fabricanteFiltrar, si lo es, lo añade al array cochesFiltrados.
    // Limpiar la tabla antes de imprimir los resultados filtrados
    limpiarTabla();
    imprimirTablaFiltrada()
    // Crear filas y celdas para cada coche filtrado y agregarlos a la tabla
    cochesFiltrados.forEach(coche => {
        let newTr = document.createElement("tr");
        newTable.append(newTr);

        let newTdFabricante = document.createElement("td");
        newTdFabricante.textContent = coche.fabricante;
        newTr.append(newTdFabricante);

        let newTdModelo = document.createElement("td");
        newTdModelo.textContent = coche.modelo;
        newTr.append(newTdModelo);

        let newTdPrecio = document.createElement("td");
        newTdPrecio.textContent = coche.precio;
        newTr.append(newTdPrecio);
    });
    console.log(cochesFiltrados);
}