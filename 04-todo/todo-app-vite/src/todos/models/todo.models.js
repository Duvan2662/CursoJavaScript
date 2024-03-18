import { v4 as aleatorio } from "uuid"; //Libreria para generar id aleatorio
export class Todo {
    constructor(descripccion){
        this.id = aleatorio();
        this.descripccion = descripccion;
        this.estado = false;
        this.crearFecha = new Date();
    }
}