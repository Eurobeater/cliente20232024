let phonebook = [
    { name: 'Luismi', number: '666333999'},
    { name: 'Antonia', number: '555123456'},
    { name: 'Hulk Hogan', number: '987654321'},
    { name: 'Donald Trump', number: '666666666'}
]

const INPUTSEARCH = document.querySelector("#inputSearch")
const CUERPO = document.querySelector("#phonebooktable>tbody")
const INPUTNAME = document.querySelector("#inputName")
const INPUTNUMBER = document.querySelector("#inputNumber")
const BTNADD = document.querySelector("#btnAdd")

BTNADD.addEventListener("click", function () {
    let newName = INPUTNAME.value.trim()
    let newNumber = INPUTNUMBER.value.trim()

    if (newName != "" && newNumber != "") {
        phonebook.push({ name: newName, number: newNumber})         //añadir en el phonebook el valor de los inputs introducidos por el usuario
        listarContactos(phonebook)
        INPUTNAME.value = ""
        INPUTNUMBER.value = ""
        INPUTNAME.focus()
    }
})

INPUTNAME.addEventListener("keyup", function (e) {          //evento para pasar al input numero al presionar la tecla enter
    if (e.key == "Enter") {
        INPUTNUMBER.focus()
    }
})

INPUTSEARCH.addEventListener("keyup", function(){   //funcion anonima (no tiene nombre). para buscar en el input
    //se ha pulsado una tecla, voy a ver si hay algo escrito
    let termino = this.value.trim().toLowerCase()        //"this" apunta a INPUTSEARCH. porque estamos en el evento de INPUTSEARCH
    let filtrados =  phonebook.filter(contacto => contacto.name.toLowerCase().includes(termino) || contacto.number.includes(termino))       //por cada contacto... . si contacto.name incluye la palabra valor de termino, da true o false. tambien filtra los numeros de telefono
    listarContactos(filtrados)
})        

//ORDENAR POR NOMBRE
const TNAME = document.querySelector("#phonebooktable th")
TNAME.addEventListener("click", function() {
    phonebook = phonebook.sort(ordenadoAlfabetico)


    listarContactos(phonebook)
})

function ordenadoAlfabetico(a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    else return -1

}

function listarContactos(listado) {
    //vaciar la tabla, por si tiene resultados anteriores
    //CUERPO.empty()
    CUERPO.innerHTML = ""

    //recorrer el listado para mostrar los elementos en la tabla
    listado.forEach( contacto => {
        //crear una fila y 2 celdas
        let nuevaFila = CUERPO.insertRow()
        let nuevaCelda1 = nuevaFila.insertCell()
        let nuevaCelda2 = nuevaFila.insertCell()
        let nuevaCelda3 = nuevaFila.insertCell()
    
        //escribir dentro de las celdas la info del contacto
        nuevaCelda1.textContent = contacto.name
        nuevaCelda2.textContent = contacto.number
        nuevaCelda3.innerHTML = "<button class='btn btn-danger'>X</button>"

        let boton = nuevaCelda3.querySelector("button")
        boton.addEventListener("click", function () {
            //let posicion = phonebook.findIndex(contacto => c.name == contacto.name && c.number == contacto.number)     //si los atributos c.name y c.number coinciden con los name y number del array, para evitar errores al borrar
            let posicion = phonebook.findIndex(c => c.name == contacto.name && c.number == contacto.number);

            phonebook.splice(posicion, 1)

            //borramos el TR del boton pulsado
            boton.parentNode.parentNode.remove()            //eliminar el elemento abuelo del boton
            console.log(phonebook)
        })
    })  
}

INPUTNAME.focus()
listarContactos(phonebook)