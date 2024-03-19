import { Todo } from "../models/todo.models";
import { createTodoHtml } from "../use-cases/index";
/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
*/

export const renderTodos = (elementId, todos = []) => {
    
    //TODO referencia
    const element = document.querySelector(elementId);
    todos.forEach(todo => {
        element.append(createTodoHtml(todo))
        
    });
}