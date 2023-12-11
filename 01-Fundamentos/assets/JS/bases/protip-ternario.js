
//Operadores ternarios con funciones
const elMayor = (a,b) => ( a > b ) ? a : b;   //Si a es mayor que b regreso a caso contrario regreso b
console.log(elMayor(8,7));
const tieneMenbresia = (miembro) => (miembro) ? '2000 Pesos' : '10000 Pesos'
console.log(tieneMenbresia(true));



//Operadores ternarios con arreglos
const amigo = false;
const amigosArray = [
    'Peter',
    'Tony',
    'Dr. Stranger',
    amigo ? 'Thor' : 'loki',
];
console.log(amigosArray);



//Operadores ternarios con multiples condiciones
const nota = 85;
const grado = (nota>=95) ? 'EXCELENTE' :
              (nota>=90) ? 'SOBRESALIENTE' :
              (nota>=85) ? 'ACEPTABLE' :
              (nota>=80) ? 'DEFICIENTE' :
              (nota>=75) ? 'NO ACEPTADO' : 'REPROBADO';
              
console.log({nota, grado});