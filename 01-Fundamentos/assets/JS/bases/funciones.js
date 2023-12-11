//Funciones en javaScript
function saludar () {
    console.log('Hola mundo');
}
saludar();

//Otra manera de declarar funciones Anonima

const saludar2 = function(){
    console.log('Hola mundo funcion anonima');
}
saludar2();

//funciones con parametros 

const saludar3 = function(nombre){
    console.log('Holangas ' + nombre);
}

saludar3('Duvan');


//Que pasa si se le envian mas argumentos a una funcion que solo tiene un argumento

const saludar4 = function (nombre){
    console.log(arguments); //Sirve para mostrar todos los argumentos que se le enviaron a la funcion en un determinado llamado 
    console.log('Hola ' + nombre);
}

saludar4('David', 33, false, ' Salazar');

saludar4();


//Funciones flecha 

const saludarFlecha = () => {
    console.log('Hola flecha');
}

saludarFlecha();

// funcion flecha con argumentos 

const saludarFlecha2 = (nombre) => {
    console.log('Hola flecha ' + nombre);
}
saludarFlecha2('TATIANA');


// Funcion que retorna un valor

const funcionRetorna = () => {

    console.log('retornando un valor');

    return 1010;//La funcion retorna un valor 
}

let valorRetornado = funcionRetorna();
console.log({valorRetornado});

const funcionRetorna2 = () => {

    console.log('retornando un valor');

    return [1,2,3,4,5,];
}

let valorRetornado2 = funcionRetorna2();
console.log({valorRetornado2});
console.log(valorRetornado2 [0], valorRetornado2 [3]);

//Es mejor trabajar de esta manera !!!!!
const valorRetornado3 = (a,b) => a + b;
console.log(valorRetornado3 (1,5));


//Funcion que genera un numero aleatorio 

const numeroRand = () => Math.random();
console.log(numeroRand());