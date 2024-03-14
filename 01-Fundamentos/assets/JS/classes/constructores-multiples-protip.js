//Como no se pueden colocar varios constructores se colocan 
//metodos estaticos para hacer varios constructores 

class Persona {

    
    //PROTIP
    static constructorPorObjeto({nombre, apellido, pais}){//Recibe un objeto
        
        return new Persona(nombre,apellido,pais);
    }

    //Constructores
    constructor(nombre, apellido, pais) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }


    //GET
    get getInfo () {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }

}



const persona1 = new Persona('David', 'Riaño', 'Colombia');
persona1.getInfo;

const juancho = {
    nombre : 'Lucas',
    apellido : 'Lopez',
    pais : 'Costa Rica'
};

const persona2 = Persona.constructorPorObjeto(juancho);
persona2.getInfo;