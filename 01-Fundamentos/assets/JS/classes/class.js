
class Persona {

    //Propiedades
    nombre = '';
    codigo = '';
    frase  = '';

    //Constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){//Valores por defecto: = 's'
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }


    //Metodos
    quienSoy(){
        console.log(`Soy: ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase(){
        console.log(`${this.codigo} dice ${this.frase}`);
    }
    dosOMasMetodos(){

        quienSoy();//Funcion dentro de un metodo
        this.miFrase();//metodo que se ejecuta dentro de otro metodo cuidado con esto 
        this.quienSoy();
        
        //Funcion que se ejecuta al inicio del metodo 
        function quienSoy(){
            console.log('Soy una funcion dentro de un metodo');
        }
    }


}


//Instanciar
const spiderman = new Persona('Peter parcket', 'Spidermann', 'Soy spiderman');
const ironMan = new Persona('Tony starck', 'Ironman', 'Soy Iroman');


console.log(ironMan);
console.log(spiderman);


spiderman.quienSoy();
ironMan.quienSoy();
spiderman.miFrase();
ironMan.miFrase();

spiderman.dosOMasMetodos();





