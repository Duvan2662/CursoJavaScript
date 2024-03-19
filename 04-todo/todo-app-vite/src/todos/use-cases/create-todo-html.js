import { Todo } from "../models/todo.models";


/**
 * 
 * @param {Todo} todo 
 */

export const createTodoHtml = (todo) => {

    
    const {descripccion,estado,id} = todo; //Destructuracion de un objeto 
    
    if(!todo){
        throw new Error('A TODO object is required');
    } 

    

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${estado ? 'checked' : ''} > 
            <label>${descripccion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">

    `;//${estado ? 'checked' : ''} = Si el estado es verdadero coloca ckecked y se marca el elemnto si no se deja vacio y no se marca 
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute(`data-id`,id)
    
    if(estado){
        liElement.classList.add('completed');
    }

    return liElement;
}