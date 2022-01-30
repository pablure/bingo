import { shuffle } from "./utils";

const jugador1 = document.querySelector("#jugador1")
const jugador2 = document.querySelector("#jugador2")
const pantalla = document.querySelector("#bingo")
const historia = document.querySelector("#historia")
const boton = document.querySelector("#boton")
let contadorJugador1 = 0
let contadorJugador2 = 0

const allNums = Array(90)
.fill(0)
.map((x, i) => i+1);
const numerosJugador1 = shuffle(allNums).slice(0,15)
const numerosJugador2 = shuffle(allNums).slice(0,15)
const numerosBombo = shuffle(allNums)

console.log(numerosBombo)

pintarNumeros(numerosJugador1, jugador1)
pintarNumeros(numerosJugador2, jugador2)

function pintarNumeros(array, jugador){
  for(let x = 0; x <= array.length-1; x++){
      let casilla = document.createElement("div");
      casilla.className = `number number${array[x]}`
      casilla.textContent = array[x]          
           
      jugador.appendChild(casilla);
  }
}
boton.addEventListener("click", () => sacarNumero())
function sacarNumero(){
  const numeroPantalla = numerosBombo.shift()
  pantalla.textContent = numeroPantalla
  historia.textContent += ` ${numeroPantalla}`
  tacharNumero(numeroPantalla)
}

function tacharNumero(numero){
  let borrar = document.querySelectorAll(`.number${numero}`)
  borrar.forEach(element => {
      element.classList.add("tachar")
  });
  for(let i = 0; i <= 15; i++){  
      if(numerosJugador1[i] === numero){
          contadorJugador1++;
          checkWinner(contadorJugador1, "GANA EL JUGADOR 1!!!")
      }
      if(numerosJugador2[i] === numero){
          contadorJugador2++;
          checkWinner(contadorJugador2, "GANA EL JUGADOR 2!!!")
      }     
  }
}

function checkWinner(contador, alerta){
  if(contador === 15){      
      alert(alerta);
      boton.remove();
  }
}
