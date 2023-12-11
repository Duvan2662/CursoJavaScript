
let juegos =  ['zelda','mario','metroid','fifa2023'];
console.log('Largo del arreglo:',juegos.length); //Metodo para saber el tamaño del arreglo 


let primerElemento = juegos[0];
let ultimoElemento = juegos[juegos.length-1];

console.log({primerElemento, ultimoElemento});

//Recorre el arreglo dato por dato  
juegos.forEach((elemento,indice,arreglo) => {
    console.log(elemento,indice,arreglo);
});

//Agregar un elemento al FINAL de un arreglo 

let nuevaLongitud = juegos.push('fornite');
console.log({nuevaLongitud, juegos});

//Agregar un elemento al INICIO de un arreglo 

let nuevaLongitud2 = juegos.unshift('age of empires');
console.log({nuevaLongitud2, juegos});


//Eliminar el ULTIMO elemento de un Arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado});


//Eliminar un elemento especifico de un arreglo 
let poscionElemento = 1;
let juegosBorrados = juegos.splice(poscionElemento, 2); //(Desde que elemento voy a borrar , cuantos a partir de ese elemento)
console.log({juegosBorrados, juegos});


//Encontrar el indice por el nombre del dato 
console.log(juegos);
let indiceZelda = juegos.indexOf('fifa2023');
console.log({indiceZelda});




