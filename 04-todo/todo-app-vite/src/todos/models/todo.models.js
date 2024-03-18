
export class Todo {
    constructor(descripccion){
        this.id = 1;
        this.descripccion = descripccion;
        this.estado = false;
        this.crearFecha = new Date();
    }
}