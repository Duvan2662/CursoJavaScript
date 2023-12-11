console.warn('CICLO WHILE');
//Se ejecuta si cumple la condicion
const carros = ['Ford','Mazda','Toyota','Honda'];

let i = 0;
// while(i<carros.length) {
//     console.log(carros[i]);
//     i++;
// };

//Con estas tres condiciones no entra al ciclo
//undefined
//null
//false

while (carros [i]){
    if(i===1){
        //break => si quiero que se salga del ciclo en cierta condicion
        i++;
        continue //=> si quiero que no se salga del ciclo si no que siga adelante
    }
    console.log(carros[i]);
    i++;
}

console.warn('DO-WHILE');
//Se ejecuta por lo menos una vez y va mirando la condicion si cumple para que se siga ejecutando
let j = 0;
do{
    console.log(carros[j])
    j++;
}while(carros[j]);



