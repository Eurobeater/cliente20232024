let container = document.querySelector(".container")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
let newP = document.createElement("p")

input.setAttribute("maxlength", "9")

button.addEventListener("click", () => {
    newP.remove()
    let dni = input.value
    console.log(input.value)
    if (año %2==0 ) {
            newP.textContent = "Es bisiesto"
            container.append(newP)
            console.log("Es bisiesto")
        }else {
            newP.remove()
            newP.textContent = "No es bisiesto"
            container.append(newP)
            console.log("No es bisiesto")
        }
})