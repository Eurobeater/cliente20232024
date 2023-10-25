const tablero = document.querySelector("#tablero")
const ANCHURA_TABLERO = 800
const ALTURA_TABLERO = 500

const DIAMETRO_BOLA = 30
const addBallBtn = document.querySelector("#addBallBtn")
const add10BallsBtn = document.querySelector("#add10BallsBtn")
const bolas = []

tablero.style.width = ANCHURA_TABLERO+ "px"
tablero.style.height = ALTURA_TABLERO+ "px"

addBallBtn.addEventListener("click", ()=>addBalls(1) )  

add10BallsBtn.addEventListener("click", ()=>addBalls(10) )      //estas llamadas a funciones son las mismas. pero el paso de parametros es distinto. una pasa 1 bola y la otra pasa 10 cantidades de bolas

function addBalls(numBalls){
    for (let i=0; i<numBalls; i++) {                        //hasta el número de bolas que se especifiquen (1 o 10)
        //crear y unir un DIV para representar una bola
        let newBall = document.createElement("div")         //crear una bola
        tablero.append(newBall)                             //unir la bola al tablero
        newBall.classList.add("bola")                       //añadir una clase de css llamada "bola" a la bola generada
        let r = Math.floor(Math.random()*255)               
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)               
        newBall.style.backgroundColor = `rgb(${r},${g},${b})`       //se establecen aleatoriamente los colores (rgb) a la bola
        
        let posx = Math.random()*(ANCHURA_TABLERO-DIAMETRO_BOLA)    
        let posy = Math.random()*(ALTURA_TABLERO-DIAMETRO_BOLA)     //generar posiciones iniciales aleatorias (positivas o negativas)
        let velx = Math.random()*2 - 1                              //generar velocidades iniciales aleatorias (positivas o negativas)
        let vely = Math.random()*2 - 1                              
        let ball = new Bola(newBall,posx,posy,velx,vely)            //crear una instancia de la clase Bola y se almacena en la variable 'ball'. representa el elemento HTML, posición y velocidad
        bolas.push(ball)                                            //añadir la instancia de la bola al array bolas[]
    }
}

function moveBalls() {
    bolas.forEach( bola => {
        bola.posX += bola.velX
        if (bola.posX <=0 || bola.posX >= ANCHURA_TABLERO - DIAMETRO_BOLA)  // Comprueba si la bola ha llegado al borde izquierdo (0) o al borde derecho del tablero (ANCHURA_TABLERO - DIAMETRO_BOLA).
            bola.velX = -bola.velX                                          // Si la bola toca uno de estos bordes, se invierte su velocidad horizontal (bola.velX = -bola.velX), lo que hace que la bola rebote en ese borde.
        if (bola.posY <=0 || bola.posY >= ALTURA_TABLERO - DIAMETRO_BOLA)   // Similar al paso anterior, esta parte verifica si la bola ha llegado al borde superior (0) o al borde inferior del tablero 
            bola.velY = -bola.velY

        bola.posY += bola.velY                      //la función actualiza la posición vertical posY de la bola al agregarle su velocidad vertical velY. Esto hace que la bola se mueva hacia arriba si velY es positivo o hacia abajo si es negativo.
        bola.bola.style.top = bola.posY + "px"      
        bola.bola.style.left = bola.posX + "px"     //Estas líneas actualizan las propiedades CSS top y left del elemento HTML de la bola para reflejar su nueva posición. Esto es lo que hace que visualmente la bola se mueva en la pantalla.
    })
}

setInterval(moveBalls,10)           //cada 10 milisegundos hace que el movimiento de las bolas se actualice constantemente en la pantalla y crea la apariencia de movimiento.