function analizarEntrada() {
    console.log(entrada.value)
    let texto = entrada.value.trim()
    let expReg = /\s+/g
    texto = texto.replace(expReg, '')
    console.log(texto)
    entrada.value = ""

    if (!texto.length) return       //if (texto.length == 0) return

    if (isNaN(texto)) {         //si no es un numero
        cadenas.push(texto)
        cadenasTA.value = cadenas
        let acumulador = 0

        for (let i = 0; i < cadenas.length; i++) {
            acumulador += cadenas[i].length
        }

        acumulador /= cadenas.length        //calcular promedio de la longitud de las cadenas
        promedioCad.value = acumulador

        entrada.value = ""          
        entrada.focus()
    }else {
        numeros.push(parseFloat(texto))     //parseFloat para que no concatene como si fuera un string
        numerosTA.value = numeros
        let acumulador = 0

        for (let i = 0; i < numeros.length; i++) {
            acumulador += numeros[i]
        }

        acumulador /= numeros.length        //acumulador = acumulador / numeros.length
        promedioNum.value = acumulador

        entrada.value = ""          //vaciar caja
        entrada.focus()
    }
    console.log("Numeros: " +numeros)
    console.log("Cadenas: " +cadenas)
    
}

let numeros = []
let cadenas = []

let entrada = document.getElementById("entrada")
let numerosTA = document.getElementById("numeros")      //TA es textarea
let cadenasTA = document.getElementById("cadenas")
let promedioNum = document.getElementById("promedioNum")
let promedioCad = document.getElementById("promedioCad")

promedioNum.disabled = true
promedioCad.disabled = true

entrada.focus()