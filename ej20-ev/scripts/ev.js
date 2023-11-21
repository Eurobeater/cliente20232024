let lis = document.querySelectorAll("#navbarSupportedContent>ul>li")
const urlBase = "http://my-json-server.typicode.com/luismiguel-fernandez/javascript23-24/"
let consultas = ["tecnologias", "fabricantes", "coches"]

const divResults = document.querySelector("#results")

const myModal = document.getElementById("carThumb")

lis.forEach ((li, index) => {
    li.addEventListener("click", () => {
        fetch(urlBase + consultas[index])       //hace fetch con la url de la base de datos concatenando con el array consultas, que es /tecnologias
        .then( resp => resp.json() )
        .then( json => {
            divResults.innerHTML = "<ul class='list-group'></ul>"
            const lista = divResults.querySelector("ul")                    //en vez de buscar en todo el documento (document) se busca en divResults para que no pille el primer elemento ul que vea
            json.forEach ( resultado => {
                //crear un LI dentro de ese nuevo UL para cada uno de los resultados del JSON
                let nuevoLi = document.createElement("li")
                nuevoLi.classList.add("list-group-item")
                //distinguir si es un coche (resultado.nombre) u otra cosa (resultado.text)
                nuevoLi.textContent = resultado.text ? resultado.text : resultado.nombre + " (" +resultado.precio + ")"
                lista.append(nuevoLi)
                nuevoLi.addEventListener("mouseover", (e) => {
                    //quitar la clase ACTIVE al item que la tenia puesta
                    if (lista.querySelector(".active"))                                //si contiene la clase .active, se quita la clase
                        lista.querySelector(".active").classList.remove(".active") 
                    //asignar la clase ACTIVE al ítem
                    
                    nuevoLi.classList.add("active")
                })
            })
        })
    })
})