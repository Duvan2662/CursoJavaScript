class Rectangulo {

    //propiedades privadas
    #area = 0; 

    //constructores
    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

} 

const rectangulo = new Rectangulo(10,15);
console.log(rectangulo);


//rectangulo.#area = 20; No se puede hacer por que es una propiedad privada 