const duvan = {
    nombre : 'Duvan',
    edad : 23,
    imprimir ()  {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const fantons = {
    nombre : 'Daniel',
    edad : 21,
    imprimir ()  {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

duvan.imprimir();






//Manera de hacerlo antes 
function Persona(nombre,edad) {
    console.log('Se ejecuto esta linea')
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function()  {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
};

//Siempre se creaba con la palabra reservada new
const maria = new Persona('maria',22);
const fanton = new Persona ('Daniel',21);
maria.imprimir();
fanton.imprimir();