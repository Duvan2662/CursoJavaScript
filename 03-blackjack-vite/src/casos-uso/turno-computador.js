import { acumularPuntos, tomarCarta , asignarImagenCarta, determinarGanador} from "../casos-uso/index";

/**
 * Funcion que inicia el turno de la computadora 
 * @param {number} puntosMinimos puntaje del jugador 
 * @param {array <string>} baraja baraja del jugador 
 * @param {array <number>} puntosJugadores array que tiene los puntajes de los jugadores Ejm: [2,15]
 * @param {HTMLElement} actualizarPuntos elemento html que me permite actualizar el puntaje en el html
 * @param {HTMLElement} divCartas elemento html que me permite crear las imagenes en el html
*/

export const turnoComputadora = (puntosMinimos, baraja, puntosJugadores,actualizarPuntos,divCartas)=>{
    let puntosComputadora = 0;

    do {
        const carta = tomarCarta(baraja);//Cuando se de click se toma una carta
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1,puntosJugadores,actualizarPuntos);
        asignarImagenCarta(carta,puntosJugadores.length-1,divCartas);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos<=21));//tiene que ser menor a los puntos del jugador Y (&&) puntos debe ser menor o igual a 21  

    determinarGanador(puntosComputadora,puntosMinimos);
}
