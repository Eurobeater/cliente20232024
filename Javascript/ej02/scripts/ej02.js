//1. Pedir al usuario un número
let numero = parseInt(prompt("Introduce un número"))           //trim para quitar los espacios
let salida = document.querySelector("#salida")
console.log(numero)
    //1b. Comprobar que lo que ha escrito el usuario es un número
    //  En caso de que no sea nº se advierte y abortamos la ejecución
    if (numero == null || isNaN(numero) || numero == "") {
        salida.value = "¡Debes introducir un número! Has escrito " +numero
    } else {

    
    
    
    //  En caso de que sea nº se hace el paso 2

//2. Mostrar en el textarea su tabla de multiplicar

let tabla = "";
for (let i = 0; i <= 10; i++) {
    tabla += numero + " x " + i + " = " + numero * i + "\n"
}
salida.value = tabla
}