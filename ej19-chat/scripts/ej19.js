const chat = document.querySelector("#chat")
const nick = document.querySelector("#nick")
const teclado = document.querySelector("#teclado")
const btnEnviar = document.querySelector("#enviar")
let ultimo = 0

teclado.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        enviarMensaje()
    }
})

btnEnviar.addEventListener("click", enviarMensaje)

function enviarMensaje() {
    if (nick.value == "" || teclado.value == "") return                             //no enviar mensajes si uno de los campos está vacío
    
    let params = new URLSearchParams("nick="+nick.value+"&texto="+teclado.value)
    let opciones = {                //objeto
        method: "POST",             //el metodo a enviar, en este caso POST (como se haria en PHP)
        body: params                //el contenido a enviar (params es la variable que contiene el nombre de usuario y el mensaje)
    }

    fetch("server/chat_insert_post.php", opciones)              //enviar el mensaje a la base de datos, con el fichero php de insertar correspondiente (en la carpeta server)
    .then( resp =>  {
        if (resp.status != 200) alert("Error al insertar")      //200 es un código de estado HTTP. esto significa que si no vale 200 (si no esta OK), el navegador lanza una alerta de que no se ha enviado
        })
    teclado.value = ""
    teclado.focus()
}

function recibirMensajes() {
    fetch("server/chat_select_get_xml.php?ultimo="+ultimo)
    .then( respuesta => respuesta.text())
    .then( xmlPlano => {
        let parser = new DOMParser()
        let xml = parser.parseFromString(xmlPlano, "text/xml")
        let mensajes = xml.querySelectorAll("mensaje")
        mensajes.forEach( m => {
            let newP = document.createElement("p")
            let nick = m.children[1].textContent
            let texto = m.children[2].textContent
            ultimo = parseInt(m.children[0].textContent)
            newP.innerHTML = "<b>" +nick+ "</b>" + ": " +texto
            chat.append(newP)
        })
        chat.scrollTop = chat.scrollHeight                      //en el chat para que baje abajo del todo
    })
}

setInterval(recibirMensajes, 1000)