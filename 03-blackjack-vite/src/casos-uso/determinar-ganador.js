/**
 * Funcion que me determina quien gana 
 * @param {number} puntosComputadora puntaje de la computadora
 * @param {number} puntosMinimos  puntaje del jugador 
*/


export const determinarGanador = (puntosComputadora,puntosMinimos)=> {
    //Atento funcion de Javascript que me permite enviar este collback(Funcion que se envia como argumento) despues de un determindado tiemp
    //En este caso 50 milsesimas de segundo
    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('NADIE GANA :(');
        }else if (puntosMinimos > 21) {
            alert('COMPUTADORA GANA');
        }else if (puntosComputadora > 21) {
            alert('JUGADOR GANA');
        } else {
            alert('COMPUTADORA GANA');
        }        
    }, 100);//Modificar tiempo a su gusto
}