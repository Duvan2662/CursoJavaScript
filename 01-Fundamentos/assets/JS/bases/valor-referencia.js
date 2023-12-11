
//Cuando se trabaja con primitivos sus valores se pasan por valor 
let a = 10;
let b = a ;
a = 30;

console.log({a,b});




//cuando se trabaja con objetos  sus valores son pasados por referencia 
let juan = {
    nombre : 'Juan',
    apellido : 'Cuenca'
}

let ana = juan;
ana.nombre = 'Ana';
ana.apellido = 'Riaño';

console.log({juan, ana})


const cambiarNombre = (persona) => {
    persona.nombre ='Tomy';
    return persona;
}
let peter = {
    nombre : 'Peter'
}
let tony = cambiarNombre(peter);
console.log({peter,tony});


//Manera de copiar un objeto correctamente 

//forma 1 sin funcion 
let david = {...ana};
david.nombre = 'David'
david.apellido = 'Rojas'
console.log({ana, david});


//forma 2 con funcion
const cambiarNombre2 = ({...persona}) => {
    persona.nombre ='luis';
    return persona;
} 
let luis = cambiarNombre2(tony);
console.log({tony,luis});



//Arreglos
const frutas = ['Pera', 'Manzana', 'Uva', 'Guayaba'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango')

console.table({frutas,otrasFrutas})


// Manera correcta
const otrasFrutas2 = [...frutas];
otrasFrutas2.push('Mora');
console.table({frutas,otrasFrutas,otrasFrutas2});

