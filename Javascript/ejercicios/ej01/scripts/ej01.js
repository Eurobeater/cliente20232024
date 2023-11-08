let container = document.querySelector(".container")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
let newP = document.createElement("p")

button.addEventListener("click", () => {
    let año =  parseInt(input.value)
    newP.remove()
    console.log(año)    
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