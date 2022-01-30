import { shuffle } from "./utils";

const jugador1 = document.querySelector("#jugador1")
const jugador2 = document.querySelector("#jugador2")
const pantalla = document.querySelector("#bingo")
const historia = document.querySelector("#historia")
const boton = document.querySelector("#boton")
let contadorJugador1 = 0
let contadorJugador2 = 0

const allNums = Array(90)                                //Creamos un array de 90 números (0-89)
.fill(0)
.map((x, i) => i+1);                                    //le sumamos 1 a i para que sean numeros de 1-90
const numerosJugador1 = shuffle(allNums).slice(0,15)    //recojemos 15 numeros aleatorios para el jugador 1
const numerosJugador2 = shuffle(allNums).slice(0,15)    //recojemos 15 numeros aleatorios para el jugador 2
const numerosBombo = shuffle(allNums)                   //recojemos los 90 numeros aleatorios para el bombo

console.log(numerosBombo)                               //comprobamos por consola que está cogiendo de 1 a 90

pintarNumeros(numerosJugador1, jugador1)
pintarNumeros(numerosJugador2, jugador2)

function pintarNumeros(array, jugador){
  for(let x = 0; x <= array.length-1; x++){
      let casilla = document.createElement("div");     //se crea un div por cada numero de los 15 del jugador
      casilla.className = `number number${array[x]}`   //se le asignan 2 clases una genérica y la otra con el número
      casilla.textContent = array[x]                   //se añade el número al div
           
      jugador.appendChild(casilla);                    //se añade el div al div principal del jugador en el DOM
  }
}
boton.addEventListener("click", () => sacarNumero())   //cuando clicamos el boton se lanza la función sacarNumero
function sacarNumero(){
  const numeroPantalla = numerosBombo.shift()          //quitamos el primer número del array del bombo
  pantalla.textContent = numeroPantalla                //mostramos el número en pantalla   
  historia.textContent += ` ${numeroPantalla}`         //añadimos el número al historial
  tacharNumero(numeroPantalla)                         //llamamos a la función tacharNumero
}

function tacharNumero(numero){
  let borrar = document.querySelectorAll(`.number${numero}`)   //seleccionamos el div con la clase del número
  borrar.forEach(element => {
      element.classList.add("tachar")                          //y le añadimos la clase tachar al numero
  });
  for(let i = 0; i <= 15; i++){  
      if(numerosJugador1[i] === numero){                           //hacemos un contador para cada jugador
          contadorJugador1++;
          checkWinner(contadorJugador1, "GANA EL JUGADOR 1!!!")    //el primero en llegar a 15 gana.
      }
      if(numerosJugador2[i] === numero){
          contadorJugador2++;
          checkWinner(contadorJugador2, "GANA EL JUGADOR 2!!!")
      }     
  }
}

function checkWinner(contador, alerta){                       //el primero en llegar a 15 saca su mensaje
  if(contador === 15){      
      alert(alerta);
      boton.remove();                                        //borramos el botón del Dom
  }
}
