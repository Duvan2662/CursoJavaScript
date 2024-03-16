import { crearBaraja } from "../casos-uso/crear-baraja";
/**
 * Esta funcion inicialisa el juego 
 * @param {number} numJugadores   Cantidad de personas que van a jugar por el momento el juego solo esta para la computaora y un jugador s 
 * @param {array <string>} baraja baraja del jugador 
 * @param {array <number>} puntosJugadores array que tiene los puntajes de los jugadores Ejm: [2,15]
 * @param {HTMLElement} actualizarPuntos elemento html que me permite actualizar el puntaje en el html
 * @param {HTMLElement} divCartas elemento html que me permite crear las imagenes en el html
 * @param {HTMLElement} btnpedir boton html que me permite pedir cartas en el juego
 * @param {HTMLElement} btndetener boton html que me permite detener y revelar el juego de la computadora 
 * @returns {object} retorna un objeto literal 
*/


export const crearJuego = (numJugadores = 2, baraja, puntosJugadores, actualizarPuntos, divCartas, btnpedir, btndetener)=> {
    const tipos      = ['C','D','H','S'], //Tipos de carta
          especiales = ['A','J','Q','K']; //Tipos de carta
    
    baraja = crearBaraja(tipos,especiales);
    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    actualizarPuntos.forEach(ele => ele.innerText = 0);//Me permite inicialiar los puntajes en 0 de los jugadores y la computadora 
    divCartas.forEach(ele => ele.innerHTML ="" );//Me permite borrar las cartas del juego anterior
    btnpedir.disabled = false;//Desbloquea el boton pedir
    btndetener.disabled = false;//Desbloquea el boton detener

    return {
        bara : baraja,
        puntosJu : puntosJugadores
    }
};