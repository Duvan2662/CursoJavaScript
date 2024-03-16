
/**
 *Esta funcion sirve para darle un valor de la carta  
 * @param {string} carta Ejemplo: 10H,KH,3D,AD
 * @returns {number} Ejemplo: 10, 10, 3, 11
 */


//
export const valorCarta2 = (carta) =>{
    let valor = carta.substring(0,carta.length-1);//Necestio tomar el primer valor de la carta 2,3,4,5 o 10 entonces siempre va a ir desde la posicion 0 hasta la posicion final menos 1 para el 10 
    
    return (isNaN(valor))?//Entra si NO es un numero el valor 
        (valor =='A')? 11:10//Si el valor es igual a A devuelve 11 si no devuelve 10
        :parseInt(valor,10);//Entra si ES un numero el valor
                            //cambio el valor de tipo string a entero 
}