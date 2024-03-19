import { Todo } from "../models/todo.models";
import { createTodoHtml } from "../use-cases/index";
let  element;
/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
*/

export const renderTodos = (elementId, todos = []) => {
    
    //TODO referencia

    if(!element){
        element = document.querySelector(elementId);
    }
    if(!element){
        throw new Error (`Elemento no encontrado ${elementId}`)
    }

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHtml(todo))
        
    });

}