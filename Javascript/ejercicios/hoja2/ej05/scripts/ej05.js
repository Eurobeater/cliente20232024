let container = document.querySelector(".container")
let newP = document.createElement("p")

let nombres = ["Inés", "Carlos", "Penélope", "Marcos", "Antonio", "Belén"]
nombres.sort()

newP.textContent = "Números: " +nombres
container.append(newP)


console.log("nombres")
console.log(nombres)