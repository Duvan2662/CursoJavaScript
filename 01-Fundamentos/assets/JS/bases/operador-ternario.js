/** 
* Dias de semana abrimos a las 11 
*pero los fines de semana abrimos a las  9
*/

//Entra a un sitio web, para consultar si esta abierto hoy.......

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, Esta cerrado, hoy abrimos a las XX

// if(dia === 0 || dia ===6){
// if([0,6].includes(dia)){//Arreglo que tiene los numeros del 1 a 6 includes()=>sirve para mirar si ahi un dato especifico en el arreglo a evaluar 
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11; //Condicion ternaria si la condicion cumple horaApertura = 9 si no horaApertura = 11

// if(horaActual>=horaApertura){
//     mensaje = 'Esta abierto';
// }else {
//     mensaje = `Esta cerrado, hoy abrimos apartir de ${horaApertura}`;
// }

mensaje = (horaActual>=horaApertura) ? `Esta abierto` : `Esta cerrado, hoy abrimos apartir de ${horaApertura}`

console.log({horaApertura,mensaje});
