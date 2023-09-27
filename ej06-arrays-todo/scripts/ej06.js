let nombres1 = ["Ana", "Jose", "Toñi", "Jesús"]
let nombres2 = [""]
let coches1 = [ 
    {fab:"Toyota", mod:"Corolla", precio: 26000, tec:"hibrido"},
    {fab:"Seat", mod:"Ibiza", precio: 22000, tec:"combustion"},
    {fab:"Tesla", mod:"Model Y", precio: 44000, tec:"electrico"},
    {fab:"Opel", mod:"Astra", precio: 21000, tec:"combustion"},
]

//copiar los elementos del array 1 al array 2
console.log("Nombres: " +nombres1)
console.log("Nombres 2: " +nombres2)

for (let i = 0; i < nombres1.length; i++) {
    nombres2.push(nombres1)
    console.log("Nombres 2: " +nombres2[i])
}

//alternativa al push en este caso
nombres2 = nombres1.slice()
console.log("Nombres 2 con slice: " +nombres2)

//filtrar (quedarme con) aquellos nombres que empiezan por J
let nombres3 = nombres1.filter(nombre => nombre.charAt(0) == "J")                  //el parentesis es una funcion simplificada
console.log("nombres3 = " +nombres3)

//filtrar los coches que cuestan mas de 25000
let coches2 = coches1.filter(c => c.precio >=25000)
console.log("Filtrar precio: ", coches2)                                      //PARA QUE NO SALGA OBJECT, CONCATENAR CON COMA ','

//filtrar los coches que sean eléctricos puros
let coches3 = coches1.filter(c => c.tec == "electrico")
console.log("Filtrar electrico ", coches3)

//ordenar alfabeticamente el array 1
function comparaCochesPorPrecio(coche1, coche2) {
    if (coche1.precio < coche2.precio) {
        return -1
    }else if (coche1.precio > coche2.precio) {
        return 1;
    }
    return 0;
}

let coches4 = coches1.slice().sort(comparaCochesPorPrecio)          //llamamos a la funcion
console.log("Alfabeticamente", coches4)

//ordenar por fabricante
function ordenarPorFabricante(coche1, coche2) {
    return coche1.marca < coche2.marca ? -1 : coche1.marca < coche2.marca ? 1 : 0;          //operador ternario
}

let coches5 = coches1.slice().sort(ordenarPorFabricante)                //esta mal-----------------------------------------------
console.log("Por fabricante: ", coches5)

//usando splice
let cocheNuevo = {fab:"Renault", mod:"Clio", precio: 25500, tec:"hibrido"}

let extraccion = coches1.splice(2, 1, cocheNuevo)            //parentesis: la posicion inicial, cuantos elementos a eliminar, elemento o elementnos nuevos a añadir
console.log("Coches1 con splice", coches1)                  //slice() se utiliza para crear una copia de parte del arreglo sin modificarlo, mientras que splice() se utiliza para modificar el arreglo original,

//copiar los elementos del array 1 al array 2       (copy)

