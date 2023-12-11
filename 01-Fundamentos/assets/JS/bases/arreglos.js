
//Manera poco tradicional 
// const arr = new Array(10); //Arreglo de 10 valores 

//Manera mas tradicional de inicializar arreglos 
// const arr = []; // Crea un arreglo vacio
// console.log(arr);



let videoJuegos = ['mario 3', 'lol', 'San Andres'];

console.log({videoJuegos})//Imprime el tipo y datos 
console.log(videoJuegos[0]);//Imprime un dato especifico del arreglo


//Arreglo de diferentes elementos
let arregloCosas = [
    true,
    1234,
    'Duvan',
    1 + 2,
    function () {},
    () => {},
    { a:1 },
    ['La monja', 'jumanji', '2012',[
        'toreto',
        'ilda reyes',
    ]],
];
console.log(arregloCosas);
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[7][3][1]);//Imprime Ilda Reyes, busca en el arreglo, luego en el otro, luego en el otro
