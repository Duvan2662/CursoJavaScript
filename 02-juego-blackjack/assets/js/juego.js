/* 
* 2C = DOS DE TREBOLES 
* 2D = DOS DE DIAMANTES 
* 2H = DOS DE CORAZONES 
* 2S = DOS DE ESPADAS 
*/

let baraja       = [];
const tipos      = ['C','D','H','S']; //Tipos de carta
const especiales = ['A','J','Q','K']; //Tipos de carta


//Esta funcion crea una nueva baraja 
const crearBaraja = () =>{
    
    //Llena el arreglo de baraja con los nueros del 2 al 10 y los diferentes tipos de carta(c,d,h,s) ejemlo: (2C,3D,4S)
    for (let i = 2; i<= 10; i++) {
       for (let tipo of  tipos) {
        baraja.push(i+tipo)
       }
    }
    //Llena el arreglo de baraja con las cartas especiales (a,j,q,k) y los diferentes tipos de carta(c,d,h,s) (AC,JC,QCKC)
    for (let tipo of tipos) {
        for (let esp of especiales) {
            baraja.push(esp+tipo)
        }
    }


    baraja = _.shuffle (baraja); //Funcion que sirve para barajar apartir de la libreria Underscore.js
    console.log(baraja);//Arreglo barajado
    return baraja;
};

crearBaraja();


//Esta funcion me permite tomar una nueva carta 

const tomarCarta = () =>{
    //Si se acaban las cartas en la baraja
    if(baraja.length === 0){
        throw 'No ahi cartas en la baraja'
    }

    const carta = baraja.pop();//Elimina el ultimo elemento de un array 
    console.log(baraja);
    console.log(carta);
    return carta;//retorna la carta  
};


//tomarCarta();

//Valor de la carta en sin utilizar ternarios

// const valorCarta = (carta) => {

//     let puntos = 0; //Valor en puntos de cada carta 

//     let valor = carta.substring(0,carta.length-1);//Necestio tomar el primer valor de la carta 2,3,4,5 o 10 entonces siempre va a ir desde la posicion 0 hasta la posicion final menos 1 para el 10 
//     console.log({valor});

//     if(isNaN(valor)){ //Mira si el valor es un numero  y devuelve un valor boleano 
//         //Entra si NO es un numero el valor 
//         if(valor == 'A'){
//             puntos = 11;
//             console.log(puntos)
//         }else{
//             puntos = 10;
//             console.log(puntos)
//         }


//     }else{
//         //Entra si ES un numero el valor 
//         puntos = parseInt(valor,10); //cambio el valor de tipo string a entero para poder hacer operaciones con el puntaje 
//         console.log({valor});
//         console.log(puntos + 5 );
//     }

// };






//Valor de la carta utilizando ternarios
const valorCarta2 = (carta) =>{
    let valor = carta.substring(0,carta.length-1);//Necestio tomar el primer valor de la carta 2,3,4,5 o 10 entonces siempre va a ir desde la posicion 0 hasta la posicion final menos 1 para el 10 
    
    return (isNaN(valor))?//Entra si NO es un numero el valor 
           (valor =='A')? 11:10//Si el valor es igual a A devuelve 11 si no devuelve 10
           :parseInt(valor,10)//Entra si ES un numero el valor
                              //cambio el valor de tipo string a entero 
}

let valor = valorCarta2(tomarCarta())
console.log({valor});


