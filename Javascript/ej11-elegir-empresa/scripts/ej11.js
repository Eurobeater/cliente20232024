const studentName = document.querySelector("#studentName")
const CHOICE1 = document.querySelector("#choice1")
const CHOICE2 = document.querySelector("#choice2")
const insertButton = document.querySelector("#insertButton")

let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]

let preferencias = localStorage.getItem("preferencias")

if (preferencias != null) {         //si es valido. tambien vale if (preferencias)
    preferencias = JSON.parse(preferencias)     //pasarlo a string
    imprimirPreferencias()              //llamar a la funcion para que se muestren las preferencias guardadas
}else {
    preferencias = []
}

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

insertButton.addEventListener("click",insertarNuevasPreferencias)
function insertarNuevasPreferencias() {
    let nombreAlumno = studentName.value.trim()
    //recuperar el texto del OPTION seleccionado en choice1
    let nombreEmpresa1 = choice1.options[choice1.selectedIndex].textContent
    //recuperar el texto del OPTION seleccionado en choice2
    let nombreEmpresa2 = choice2.options[choice2.selectedIndex].textContent
    //insertar en el array preferencias un nuevo objeto con los 3 datos introducidos por usuario
    preferencias.push({
        alumno: nombreAlumno,
        empresa1: nombreEmpresa1,
        empresa2: nombreEmpresa2
    })

    localStorage.setItem("preferencias", JSON.stringify(preferencias))

    //mostrar en la consola para depurar programa
    console.table(preferencias)
    //por último, una vez insertada la nueva info en el array, hay que mostrarlo
    // en el HTML, en la tabla vacía que hay en la parte de abajo de la web
    imprimirPreferencias()
}

function imprimirPreferencias() {
    studentsChoices.innerHTML = ""
    preferencias.forEach( pref, indice => {
        let newTR = studentsChoices.insertRow()
        let newTD1 = newTR.insertCell()
        let newTD2 = newTR.insertCell()
        let newTD3 = newTR.insertCell()
        let newTD4 = newTR.insertCell()
        newTD1.textContent = pref.alumno
        newTD2.textContent = pref.empresa1
        newTD3.textContent = pref.empresa2
        let newButton = document.createElement("button")
        newButton.classList.add("btn","btn-danger")
        newButton.textContent = "Delete"
        newTD4.append(newButton)
        //falta hacer que el botón escuche el evento CLICK
        newButton.addEventListener("click", function () {
            preferencias.splice(indice, 1)               //borrar un elemento del array
            //imprimirPreferencias() //redibuja todo, prodria ser ineficiente
            newTR.remove()
            localStorage.setItem("preferencias",JSON.stringify(preferencias))
        })
//falta también insertar otros botones para otras acciones
    let newButtonDown = document.createElement("button")
    newButtonDown.classList.add("btn", "btn-info")
    newButtonDown.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/></svg>'
        //clic en el boton para bajar (bajar la fila en tabla HTML)
        newButtonDown.addEventListener("click", function () {
            //bajar en el array = aumentar su indice
            if (indice == preferencias.length - 1 ) return
            let temp = pref
            preferencias[indice] = preferencias[indice+1]
            //modificar TABLE
        })

        
    })//fin del foreach
}