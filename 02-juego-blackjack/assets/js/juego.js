/* 
* 2C = DOS DE TREBOLES 
* 2D = DOS DE DIAMANTES 
* 2H = DOS DE CORAZONES 
* 2S = DOS DE ESPADAS 
*/

let baraja       = [];
const tipos      = ['C','D','H','S']; //Tipos de carta
const especiales = ['A','J','Q','K']; //Tipos de carta


const crearBaraja = () =>{
    
    //Llena el arreglo de baraja con los nueros del 2 al 10 y los diferentes tipos de carta(c,d,h,s)
    for (let i = 2; i<= 10; i++) {
       for (let tipo of  tipos) {
        baraja.push(i+tipo)
       }
    }
    //Llena el arreglo de baraja con las cartas especiales (a,j,q,k) y los diferentes tipos de carta(c,d,h,s)
    for (let tipo of tipos) {
        for (let esp of especiales) {
            baraja.push(esp+tipo)
        }
    }


    console.log({baraja});//Arreglo sin barajar
    baraja = _.shuffle (baraja); //Funcion que sirve para barajar apartir de la libreria Underscore.js
    console.log({baraja});//Arreglo barajado

    
    return baraja;
};

crearBaraja();

