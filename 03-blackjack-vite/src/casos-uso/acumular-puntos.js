import { valorCarta2 } from "../casos-uso/index";
/**
 * Funcion que me permite acumular los puntos de cada jugador o la computadora 
 * @param {string} carta carta del jugador Ejm: 2H, 10D, 4C
 * @param {number} turno turno del jugador Ejm: turno 2, 3, 4, el ultimo siempre es de la computadora
 * @param {array <number>} puntosJugadores array que tiene los puntajes de los jugadores Ejm: [2,15]
 * @param {HTMLElement} actualizarPuntos elemento html que me permite actualizar el puntaje en el html
 * @returns {number} Retorna el puntaje del jugador 
*/

export const acumularPuntos = (carta,turno,puntosJugadores,actualizarPuntos) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta2(carta);
    actualizarPuntos[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
};