import todoStore, { Filters } from "../../store/todo.store";


let element;

export const renderPending = (elementoId) => {
    if(!element){
        element = document.querySelector(elementoId);
    }
    if(!element){
        throw new Error (`Elemento no encontrado ${elementoId}`)
    }
    element.innerHTML = todoStore.getTodo(Filters.Pending).length;
} 