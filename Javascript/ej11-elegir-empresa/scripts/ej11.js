let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]

const studentName = document.querySelector("#studentName")
const CHOICE1 = document.querySelector("#choice1")
const CHOICE2 = document.querySelector("#choice2")
const insertButton = document.querySelector("#insertButton")

let cleanStudentName = true

studentName.focus()
CHOICE2.disabled = true
insertButton.disabled = true

empresas.forEach((empresa, i) => {                               //por cada empresa... se hace lo que hay entre los corchetes. i es indice. aqui tuve que hacer algo con los parentesis
    let newOption = document.createElement("option")
    newOption.textContent = empresa
    newOption.value = i + 1
    CHOICE1.append(newOption)
})

studentName.addEventListener("keyup", keyPressed)

function keyPressed() {
    if (studentName.value.trim().length) cleanStudentName = false
    else cleanStudentName = true
    checkButtonDisabled()
}


CHOICE1.addEventListener("change", fillChoice2)     //evento chage para los select

function fillChoice2() {
    //vaciar las empresas de choice2, por si existiera alguna
    CHOICE2.innerHTML = '<option value = "0">(choose one)</option>'         //innerHTML para modificar la etiqueta etiqueta del index

    //si el usuario elige la opcion nula (value = 0) en choice1...
    if (CHOICE1.value == 0) {
        CHOICE2.disabled = true
        return
    }
    else CHOICE2.disabled = false       

    //añadir todas las empresas EXCEPTO la elegida en choice1
    empresas.forEach((empresa, i) => {                                   //otro coso con los parentesis
        if (CHOICE1.value != i + 1) {                                    //si el valor del select es distinto que el del indice, no se hace el codigo de abajo (hacen que no se vean las mimas empresas en ambos selects)
            let newOption = document.createElement("option")
            newOption.textContent = empresa
            newOption.value = i + 1
            CHOICE2.append(newOption)
        }
    })
    //decidir si habilitar o deshabilitar choice2
    CHOICE2.disabled = false
    checkButtonDisabled()              
}

CHOICE2.addEventListener("change", checkButtonDisabled)

function checkButtonDisabled() {
    if (cleanStudentName == false && CHOICE1.value != 0 && CHOICE2.value != 0)           //if (los 3 campos estan OK)
        insertButton.disabled = false
    else insertButton.disabled = true
}