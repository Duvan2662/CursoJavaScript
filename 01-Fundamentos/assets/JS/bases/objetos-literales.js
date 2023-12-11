//Objetos literarles 
let personaje = {
    nombre: 'tony starck',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    cordenadas : {
        lat: 34.034,
        lon: -118.7,
    },
    trajes : ['Mark I', 'Mark v', 'superTraje'],
    direccion : {
        calle: 38,
        letra: 'A',
        cardinalidad: 'sur',
        numero: 89,
        letra2: 'C',
        numero2: 14,
    },
};

console.log(personaje); //Accede al objeto 
console.log('Nombre:', personaje.nombre);//Accede a una propiedad del objeto 
console.log('Nombre', personaje['nombre']);//Accede a una propiedad del objeto
console.log('Cordenadas', personaje.cordenadas);
console.log('latitud', personaje.cordenadas.lat); //Accede a una propiedad del objeto que tiene otro objeto
console.log('Numero de trajes', personaje['trajes'].length);//Accede a la cantidad de trajes
console.log('Numero de trajes', personaje.trajes.length);//Accede a la cantidad de trajes
console.log('Numero de trajes', personaje.trajes[personaje.trajes.length-1]);//Accede a la cantidad de trajes

//Otra manera de acceder a las propiedades 
const x = 'edad'
console.log('Edad', personaje[x]);


//Mas detalles 

//Eliminar una propiedad del objeto
delete personaje.edad;
console.log(personaje);

//Crear arreglos con pares de valores 
const paresDeValores = Object.entries(personaje);
console.log(paresDeValores);

//Crear una propiedad de un objeto 
personaje.casado = true;
console.log(personaje)

//Bloquear las propiedades de un objeto para no añadir o quitar 
Object.freeze(personaje);
personaje.dinero = 100000000000000000;
personaje.casado = false;
console.log(personaje);

//Crea un arreglo con las propiedades del objeto personajes
const propiedadesObjeto = Object.getOwnPropertyNames(personaje);
console.log(propiedadesObjeto);

//Crea un arreglo con los valores de las propiedades del objeto personajes
const valoresPropiedadesObjeto = Object.values(personaje);
console.log(valoresPropiedadesObjeto);


// Mas metodos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
