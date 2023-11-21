
let botones = document.querySelectorAll("button");
let decimal = document.querySelector("#decimal");           //el input
let pesos = [128, 64, 32, 16, 8, 4, 2, 1]

let valorBoton

botones.forEach((boton, i) => {
    boton.addEventListener("click", function alternar() {
        if (botones[i].textContent === "0") { // Compara con cadenas
            botones[i].textContent = "1";
            valorBoton = parseInt(botones[i].textContent, 10)
            decimal.value = parseInt(decimal.value) + pesos[i]
            console.log("Indice boton: " +i)
            console.log("Boton: " +boton)
            console.log(decimal.value)
            console.log(typeof(valorBoton))
            i++
        } else {
            botones[i].textContent = "0";
            valorBoton = parseInt(botones[i].textContent, 10)
            decimal.value = parseInt(decimal.value - pesos[i])
            console.log("Indice boton: " +i)
            console.log("Boton: " +boton)
            console.log(decimal.value)
            console.log(typeof(valorBoton))
            i++
        }
    });
});





    








/*
function calcular() {
    let binario = "";
    botones.forEach(boton => {
        binario += boton.textContent;
    });

    const resultadoDecimal = parseInt(binario, 2);
    decimal.value = resultadoDecimal;
}
*/

/////////////////////////////////////////////////////////

/*
let botones = document.querySelectorAll("button");
let decimal = document.querySelector("#decimal");

botones.forEach((boton, i) => {
    boton.addEventListener("click", function alternar() {
        if (botones[i].textContent === "0") { // Compara con cadenas
            botones[i].textContent = "1";
        } else {
            botones[i].textContent = "0";
        }
        calcular();
    });
});

function calcular() {
    let binario = "";
    botones.forEach(boton => {
        binario += boton.textContent;
    });

    const resultadoDecimal = parseInt(binario, 2);
    decimal.value = resultadoDecimal;
}
*/