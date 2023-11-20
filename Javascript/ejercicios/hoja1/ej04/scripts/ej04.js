let button = document.querySelector("#button")
let p = document.querySelector("#p")

button.addEventListener("click", () => {
    alert("Uso del carácter de escape:\nLas hay “dobles” y las hay ‘simples’.\nTambién la barra \\ se puede imprimir en un mensaje.");
    p.textContent = "Presiona de nuevo para volver a visualizar el mensaje"
})