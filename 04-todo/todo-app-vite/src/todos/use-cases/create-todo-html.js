import { Todo } from "../models/todo.models";


/**
 * 
 * @param {Todo} todo 
 */

export const createTodoHtml = (todo) => {

    const checar = '';
    const {descripccion,estado,id} = todo; //Destructuracion de un objeto 
    
    if(!todo){
        throw new Error('A TODO object is required');
    } 

    if (estado) {
        checar = 'checked'
    }

    const html = `

        <div class="view">s
            <input class="toggle" type="checkbox" ${checar}>
            <label>${descripccion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">

    `;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute(`data-id`,id)
    
    if(estado){
        liElement.classList.add('completed');
    }

    return liElement;
}