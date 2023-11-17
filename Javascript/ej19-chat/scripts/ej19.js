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
    let opciones = {            //objeto
        method: "POST",
        body: params
    }

    fetch("server/chat_insert_post.php", opciones)
    .then( resp =>  {
        if (resp.status != 200) alert("Error al insertar")
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