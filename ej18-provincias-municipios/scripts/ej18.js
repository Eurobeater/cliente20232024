const selProvincias = document.querySelector("#provincias")
const selMunicipios = document.querySelector("#municipios")

fetch("server/cargaProvinciasXML.php")
.then( respuestaHTTP => respuestaHTTP.text())                                                       //se usa text si es un XML (está en texto plano al principio). json para los json
.then (xmlTextoPlano => {
    //1. definir un objeto parseador
    let parser = new DOMParser()                                                    
    //2. de ese objeto parseador, invocamos el método "parseFromString()
    let xmlFinal = parser.parseFromString(xmlTextoPlano, "text/xml")   
    //3.                        
    let provincias = xmlFinal.querySelectorAll("provincia")                                        //seleccionar todas las provincias que han sido pasadas, para poder recorrerlas
    provincias.forEach(p => {                                                                       //por cada provincia (p), crear un option
        //el XML llega en texto plano, hay que parsearlo para convertirlo en un árbol navegable
        let newOption = document.createElement("option")
        //el textContent del OPTION quiero que sea el nombre de la provincia,
        //que es el hijo NOMBRE en el XML
        newOption.text = p.querySelector("nombre").textContent                                      //acceder al textContent de la etiqueta XML seleccionada
        //el value del OPTION quiero que sea el código de la provincia,
        //que es el hijo CÓDIGO en el XML
        newOption.value = p.querySelector("codigo").textContent
        selProvincias.append(newOption)
    })                                           
})

selProvincias.addEventListener("change", () => {
    if (selProvincias.value != "0") {
        fetch("server/cargaMunicipiosXML.php?provincia="+selProvincias.value)
        .then( respuesta => respuesta.text() )
        .then( datos => { 
            //selMunicipios.innerHTML = ""
            let parser = new DOMParser()
            let xml = parser.parseFromString(datos, "text/xml")
            let todosLosMuni = xml.querySelectorAll("municipio")
            todosLosMuni.forEach(m => {                             //por cada municipio (m) se crea un option
                let newOption = document.createElement("option")
                newOption.textContent = m.lastChild.textContent
                newOption.value = m.firstChild.textContent
                selMunicipios.append(newOption)
            })                 
        })
    }
})