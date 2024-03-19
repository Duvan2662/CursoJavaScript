import html from "../todos/app.html?raw";
import todoStore from '../store/todo.store';
import { renderTodos } from "../todos/use-cases/index";

//Nombres de los elementos HTML
const ElementIDs = {
    TodoList : `.todo-list`
}

/**
 * 
 * @param {string} elementId Sirve para la renderizacion del programa 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos)
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}