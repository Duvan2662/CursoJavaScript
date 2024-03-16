
/**
 * Esta funcion me permite tomar la ultima carta de la baraja y luego la devuelve y la elimina 
 * @param {array <string>} baraja baraja del jugador 
 * @returns {string} retorna la ultima carta
*/


export const tomarCarta = (baraja) =>{
    //Si se acaban las cartas en la baraja
    if(baraja.length === 0){
        throw 'No ahi cartas en la baraja'
    }
    return baraja.pop();//Retorna y elimina el ultimo elemento de un array 
};