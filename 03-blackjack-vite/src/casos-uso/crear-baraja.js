
import _ from "underscore";//Imporatcion de undercore


/**
 * Esta funcion crea una nueva baraja 
 * @param {array <string>} tiposCarta  Ejemplo : ['C','D','H','S']
 * @param {array <string>} tiposespeciales  Ejemplo : ['A','J','Q','K']
 * @returns {array <string>} retorna una nueva baraja
*/

export const crearBaraja = (tiposCarta,tiposespeciales) =>{
    let baraja = [];

    for (let i = 2; i<= 10; i++) {
    for (let tipo of  tiposCarta) {
        baraja.push(i+tipo)
    }
    }

    for (let tipo of tiposCarta) {
        for (let esp of tiposespeciales) {
            baraja.push(esp+tipo)
        }
    }
    
    return _.shuffle (baraja);//Funcion que sirve para barajar apartir de la libreria Underscore.js
};
