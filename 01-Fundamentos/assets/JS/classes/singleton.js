

class Singleton {

    static instancia; //undefined
    nombre = '';



    constructor (nombre = '') {

        //si ya existe una instancia retorne esa instancia 
        if( !!Singleton.instancia) {
            return Singleton.instancia
        }


        Singleton.instancia = this;
        this.nombre = nombre;
    }
}


const instancia = new Singleton('popeye');
const instancia2 = new Singleton('Hercules');
const instancia3 = new Singleton('Hercules');


console.log(`Nombre de la intancia es: ${instancia.nombre}`);
console.log(`Nombre de la intancia es: ${instancia2.nombre}`);
console.log(`Nombre de la intancia es: ${instancia3.nombre}`);
