let dnis = ["12345678A","56328691H", "41905378P"]

//Mostrar por consola, en formato columna, la siguiente tabla:
//DNI ORIGINAL  Parte num   Letra   Correcto

console.log ("DNI ORIGINAL\tParte num\tLetra\tCorrecto")            //"\t" para separar los strings en distintas lineas. recordar usar + para concatenar
for (let i = 0; i < dnis.length; i++) {
    let parteNum = dnis[i].slice(0, 7);
    let letra = dnis[i].slice(8);       //empezar en la cadena 8 de 'dnis'para sacar la letra del dni

    let letras = "TRWAGMYFPDXBNJZSQVHLCKE"
    let resto = parteNum % 23

    if (letra.toLowerCase() == letras.charAt(resto).toLowerCase()){
        console.log(dnis[i]+"\t" +parteNum+ "\t"  +letra+ "\t" + "OK")
    }else {
        console.log(dnis[i]+"\t" +parteNum+ "\t"  +letra+ "\t" + "corresponde letra " +letras.charAt(resto))

    }

    console.log(dnis[i]+"\t" +parteNum+ "\t"  +letra)
}