import html from "../todos/app.html?raw";
import todoStore from '../store/todo.store';
import { renderTodos } from "../todos/use-cases/index";

//Nombres de los elementos HTML
const ElementIDs = {
    TodoList : `.todo-list`,
    NewTodoImput : `#new-todo-input`
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

    


    //Refercias al DOM 

   const newDescriptionImput = document.querySelector(ElementIDs.NewTodoImput);

   newDescriptionImput.addEventListener('keyup', (evento) => { //Escucha cada ve que se oprime una tecla 

    if(evento.keyCode !== 13){//Verifica si el usuario ha presiona la tecla enter y se detiene si es asi
        return
    }
    if(evento.target.value.trim().length === 0){//Verifica que el usuario alla escrito algo 
        return;
    }
    todoStore.addTodo(evento.target.value);
    displayTodos();
    evento.target.value = ''

   })

}