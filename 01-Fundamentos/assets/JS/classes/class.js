
class Persona {


    //Propiedades staticas 
    static conteo = 0;
    static get getConteo () {
        return (`Cantidad de veces que se ha intanciado ${Persona.conteo}`);
    }

    static mensaje () {
        console.log(this.nombre); //No se pueden utilizar las propiedades que no son statics
        console.log('Hola a todos soy un metodo estatico');
    }

    //Propiedades
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    //Constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){//Valores por defecto: = 's'
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona.conteo ++;
    }

    //Set y get 

    //Establece un valor de una propiedad
    set setcomidaFavorita(comida) {//Solo recibe un argumento 
        this.comida = comida.toUpperCase();//Se pueden hacer modificacionesss
    }

    //Recuperar un valor de una propiedad 
    get getcomidaFavorita(){
        return console.log(`La comida favorita de ${this.nombre} es ${this.comida}`)
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


spiderman.quienSoy();
ironMan.quienSoy();
spiderman.miFrase();
ironMan.miFrase();

spiderman.dosOMasMetodos();

spiderman.setcomidaFavorita = 'Pollito con papa';

console.log(spiderman);
console.log(spiderman.getcomidaFavorita);


console.log(Persona.conteo);
console.log(Persona.getConteo);
Persona.mensaje();






