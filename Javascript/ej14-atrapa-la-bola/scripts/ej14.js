//1. El botón EMPEZAR debe inicializar una cuenta atrás de 10 segundos. Al llegara 0, se detiene
//2. Cada segundo que avanza, la cuenta atrás, la bola cambia de sitio al azar
//3. Que la bola sea clicable para sumar puntos SOLO con la partida en marcha

const TABLERO = document.querySelector("#tablero")
let btnEmpezar = document.querySelector("#btnEmpezar")
let tiempo = document.querySelector("#tiempo")
let puntos = document.querySelector("#puntos")
const ANCHURA_TABLERO = 800
const ALTURA_TABLERO = 500

const bola = document.querySelector("#bola")
const DIAMETRO_BOLA = 30
const bolas = []

tablero.style.width = ANCHURA_TABLERO+ "px"
tablero.style.height = ALTURA_TABLERO+ "px"

tiempo.value = 10
tiempo.textContent = tiempo.value
console.log(tiempo.value)

function actualizarTiempo() {
    tiempo.value -= 1;                    // Decrementamos el tiempo restante
    tiempo.textContent = tiempo.value
    if (tiempo.value === 0) {             // Si el tiempo restante es 0, detenemos la cuenta atrás
      clearInterval(intervalo);     // Detenemos la cuenta atrás
    } else {
      console.log(tiempo.value);          // Actualizamos el tiempo restante en la consola
    }
  }

  btnEmpezar.addEventListener("click", () => {          // Asignamos un evento al botón para que, al hacer clic, comience la cuenta atrás
    intervalo = setInterval(actualizarTiempo, 1000);    // Inicializamos la cuenta atrás
    btnEmpezar.disabled = true
        let posx = Math.random()*(ANCHURA_TABLERO-DIAMETRO_BOLA)    
        let posy = Math.random()*(ALTURA_TABLERO-DIAMETRO_BOLA)     //generar posiciones iniciales aleatorias (positivas o negativas)
        let velx = Math.random()*2 - 1                              //generar velocidades iniciales aleatorias (positivas o negativas)
        let vely = Math.random()*2 - 1                              
        let ball = new Bola(bola,posx,posy,velx,vely)            //crear una instancia de la clase Bola y se almacena en la variable 'ball'. representa el elemento HTML, posición y velocidad

        bola.posX += bola.velX
        if (bola.posX <=0 || bola.posX >= ANCHURA_TABLERO - DIAMETRO_BOLA)  // Comprueba si la bola ha llegado al borde izquierdo (0) o al borde derecho del tablero (ANCHURA_TABLERO - DIAMETRO_BOLA).
            bola.velX = -bola.velX                                          // Si la bola toca uno de estos bordes, se invierte su velocidad horizontal (bola.velX = -bola.velX), lo que hace que la bola rebote en ese borde.
        if (bola.posY <=0 || bola.posY >= ALTURA_TABLERO - DIAMETRO_BOLA)   // Similar al paso anterior, esta parte verifica si la bola ha llegado al borde superior (0) o al borde inferior del tablero 
            bola.velY = -bola.velY

        bola.posY += bola.velY                      //la función actualiza la posición vertical posY de la bola al agregarle su velocidad vertical velY. Esto hace que la bola se mueva hacia arriba si velY es positivo o hacia abajo si es negativo.
        bola.style.top = bola.posY + "px"      
        bola.style.left = bola.posX + "px"
        
        console.log(ball)
  });








