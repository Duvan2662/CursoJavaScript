
let a = 9;

if(a >= 10){
    console.log('A es mayor o igual que 10');

}else {
    console.log('A es menor que 10');

}
console.log('Fin del programa');


//

const hoy = new Date(); //obtiene la fecha actual
console.log({hoy});
let dia = hoy.getDay(); //saca el dia de la fecha -> 0:Domingo, 1:Lunes, 2:Martes......
console.log({dia}); 
if(dia === 0){
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');
}else if(dia === 2){
    console.log('Martes');
}else if(dia === 3){
    console.log('Miercoles');
}else if(dia === 4){
    console.log('Jueves');
}else if(dia === 5){
    console.log('Viernes');
}else if(dia === 6){

}else if (dia === 7){
    console.log('Sabado');
}else{
    console.log('No es lunes ni martes ni miercoles ni jueves ni viernes ni sabado ni domingo');
}

// Tipos de iguales
// = Asignacion:
// == Revisa si igual al otro dato pero no verifica el tipado(entero,caracter...)
// === Revisa si igual al otro dato y el tipado  


//Ejercio dia de la semana utilizando objetos

const diaLetras = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miercoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sabado',
}
let diaprueba = 3;
console.log(diaLetras[diaprueba] || 'Dia no definido');//Por si colocan un nuemero mayor a 6 

//Ejercio dia de la semana utilizando arreglos
const diaLetra2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes', 'Sabado',];
console.log(diaLetra2[diaprueba]|| 'Dia no definido');