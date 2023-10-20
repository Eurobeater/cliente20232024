const tablero = document.querySelector("#tablero")
const ANCHURA_TABLERO = 800
const ALTURA_TABLERO = 500

const addBallBtn = document.querySelector("#addBallBtn")


tablero.style.width = ANCHURA_TABLERO+ "px"
tablero.style.height = ALTURA_TABLERO+ "px"

addBallBtn.addEventListener("click", () => {
    //crear y unir un DIV para representar una bola
    let newBall = document.createElement("div")
    tablero.append(newBall)
    newBall.classList.add("bola")
    newBall.style.top = Math.floor(Math.random(0)*ALTURA_TABLERO)+ "px"
    newBall.style.left = Math.floor(Math.random(0)*ANCHURA_TABLERO)+ "px"
    let r = Math.floor(Math.random(0)*255)
    let g = Math.floor(Math.random(0)*255)
    let b = Math.floor(Math.random(0)*255)
    newBall.style.backgroundColor = `rgb(${r},${g},${b})`
})
