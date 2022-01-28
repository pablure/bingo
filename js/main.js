import "../css/style.css";

import { shuffle } from "./utils";

const numerosBombo = []
const numerosDesechados = []
const numerosJugador1 = []
const numerosJugador2 = []

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8]));

function crearCarton(){
  const allNums = Array(90)
    .fill(0)
    .map((x, i) => i + 1);

  return shuffle(allNums).slice(0, 15);
}

console.log(crearCarton());

function pintarCartonEnDom(arrayDeNumeros){
  //aquí gestionamos la lógica de pintar el html en el DOM
}

function pintarNumerosEnDom(numero){

}

function sacarNumeroDelBombo(){

}

function comprobarGanador(cartonJugador, numerosDesechados)

/*for(let i = 1 ; i <= 90; i++){
  numerosBombo.push(i)

/*console.log(shuffle(numerosBombo))*/

/*var arrayBombo = []

for(let i = 1 ; i <= 90; i++){
  arrayBombo.push(i)

console.log(arrayBombo)

*/
