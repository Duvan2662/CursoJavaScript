//Creando una funcion que crea un objeto con nombre y apellido 
const crearPersona = (nombre,apellido) => ({nombre,apellido})
let persona = crearPersona('David','Riaño');
console.log(persona);



//Mirar los argumentos de una funcion flecha 
const imprimeArgumentos = (...arguments) => arguments;
let argumentos = imprimeArgumentos('1',true,false,3,'Hola duvancho');
console.log({argumentos});

//Se le asigna a cada dato el valor del argumento 
const [edad,casado,hijos,cantidadHijos,saludo] = imprimeArgumentos('1',true,false,3,'Hola duvancho');
console.log({edad,casado,hijos,cantidadHijos,saludo});
//ejemplo 2
const {apellido} = crearPersona('David','Riaño');
console.log({apellido});


//Destructuracion de datos 
let tony = {
    nombre: 'tony starck',
    codeName: 'IronMan',
    vivo: false,
    //edad: 40,
    trajes : ['Mark I', 'Mark v', 'superTraje'],
};

// const imprimePropiedades = (personaje) =>{

//     console.log('Nombre: ', personaje.nombre);
//     console.log('CodeName: ', personaje.codeName);
//     console.log('Vivo: ', personaje.vivo);
//     console.log('edad: ', personaje.edad);
//     console.log('trajes: ', personaje.trajes);
// }
// console.log('\n');
// imprimePropiedades(tony);




//Manera correcta de hacerlo 
const imprimePropiedades = ({nombre,codeName,vivo,edad = 40,trajes}) =>{

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
console.log('\n');
imprimePropiedades(tony);


